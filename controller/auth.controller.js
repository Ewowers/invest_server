const User = require("../model/user.model");
const Roles = require("../model/roles.model");
const config = require("config");
const jwt = require("jsonwebtoken");
const ip = require("ip");
const mail = require("../mail");
const sing = (id) => {
  const token = jwt.sign({ id: id }, config.get("jwt"), { expiresIn: "1440h" });
  return token;
};
const verify = (access) => {
  const token = jwt.verify(access, config.get("jwt"));
  return token.id;
};
class Controller {
  async auth(req, res) {
    //авторизация
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user) return res.json({ error: "пользователь не найден" });
      if (user.password !== password) return res.json({ error: "пороль не верный" });
      if (!user.active) return res.json({ error: "аккаунт не активирован" });
      return res.json({ token: sing(user.id), uri: user.role });
    } catch (e) {
      console.log(e);
    }
  }
  async regist(req, res) {
    //регистрация
    const { username, email } = req.body;
    const candidateName = await User.findOne({ where: { username } }); //проверка почты
    const candidateEmail = await User.findOne({ where: { email } }); //проверка логина
    if (candidateName) return res.json({ error: "логин занят" });
    if (candidateEmail) return res.json({ error: "почта занята" });
    const interfaceUser = {
      username: req.body.username, //логин
      email: req.body.email, //почта
      password: req.body.password, // пороль
      role: req.body.role, // роль
      ip: ip.address(), // апй адресс
    };
    const user = await User.create(interfaceUser);
    const token = await sing(user.id);

    //// mail(email.toLowerCase(), "Активация", `http://localhost:3000/api/auth/active/${user.id}`);
    return res.json({ token, uri: user.role === "admin" ? "admin" : "user" });
  }
  async active(req, res) {
    const { id } = req.params;
    await User.update({ active: true }, { where: { id: id } });
    res.send("<h1>Вашь аккаунт активирован</h1>");
  }
  async onload(req, res) {
    const user = req.user;
    if (!user) return res.json({ error: true });
    return res.json({ uri: user.role });
  }
  async user(req, res, next) {
    //отправляет токен в req
    try {
      const access = req.headers["access-token"];
      if (!access || access === "null") {
        req.user = null;
        return next();
      }
      const id = verify(access, config.get("jwt"));
      if (!id) {
        req.user = null;
        return next();
      }
      const user = await User.findByPk(id);
      req.user = user;

      return next();
    } catch (err) {
      console.log(err);
    }
  }
  async getMy(req, res) {
    const { user } = req;
    if (!user) return res.end();
    user.password = "Куда смотриш";
    return res.json(user);
  }
  async update(req, res) {
    const { username, id } = req.params;
    if (username !== req.user.username || id !== req.user.id) {
      await User.update({ ...req.body }, { where: { username: username, id: id } });
      return res.json({ status: true });
    } else return res.status(400).end();
  }
}
module.exports = new Controller();
