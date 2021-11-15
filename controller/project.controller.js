const Model = require("../model/project.model");
const ModelType = require("../model/admin/project.type");
const User = require("../model/user.model");
const { UtilAlert } = require("./alert.controller");
const utilAlert = new UtilAlert();
class Controller {
  async create(req, res) {
    //создание проекта
    if (!req.user) return res.end();
    const candidate = await Model.findOne({ where: { title: req.body.title } });
    if (candidate) return res.json({ error: "Название занято" });
    let { user } = req.body;
    user = JSON.parse(user);
    delete req.body.user;
    const project = await Model.create({ ...req.body, username: user.username, userId: user.id });
    return res.json(project);
  }
  async applicant(req, res) {
    //создание проекта соискателем
    if (!req.user) return res.json({ error: "Авторизуся" });
    const candidate = await Model.findOne({ where: { title: req.body.title } });
    if (candidate) return res.json({ error: "Название занято" });
    const project = await Model.create({
      ...req.body,
      user: JSON.stringify(req.user),
      userId: req.user.id,
      username: req.user.username,
    });
    return res.json(project);
  }

  async complite(req, res) {
    //Одобрение проекта
    const { id } = req.params;
    await Model.update({ status: true }, { where: { id } });
    const project = await Model.findByPk(id);
    const user = await User.findByPk(project.userId);
    await utilAlert.create({
      userId: user.id,
      projectId: project.id,
      information: "Ваш проект " + project.title + " одобрен",
      message: "Проект одобрен",
    });
    return res.send(true);
  }
  async update(req, res) {
    //update
    const { id } = req.params;
    const project = await Model.update({ ...req.body }, { where: { id: id } });
    return res.json(project);
  }
  async getMy(req, res) {
    //получение проекта пользователя
    const { id, username } = req.user;
    const projects = await Model.findAll({ where: { userId: id, username: username } });
    return res.json(projects);
  }
  async findAll(req, res) {
    //получение всех проектов, доступно для админов
    const projects = await Model.findAll();
    return res.json(projects);
  }
  async findById(req, res) {
    //получение по id
    const project = await Model.findByPk(req.params.id);
    return res.json(project);
  }
  async findByIds(req, res) {
    // получение по нескольким id;
    let { ids } = req.params;
    let projects = [];
    if (!ids) return res.end();
    for (let index = 0; index < ids.length; index++) {
      const project = await Model.findByPk(Number(ids[index]));
      projects.push(project);
    }
    return res.json(projects);
  }
  async destroy(req, res) {
    const { id } = req.params;
    const project = await Model.destroy({ where: { id: id } });
    return res.end();
  }
  async favorite(req, res) {
    const { id } = req.params; //id проекта
    const user = await User.findByPk(req.user.id); //пойск пользователя
    let { favorite } = user; //разбор пользователя и получение массива "избранных"
    if (favorite.indexOf(id) === -1) {
      favorite.push(id); //если проекта нету то добавляет
      console.log("push");
    } else {
      console.log("splice");
      favorite.splice(favorite.indexOf(id), 1); //если есть удалаяет
    }
    await User.update({ favorite: favorite }, { where: { id: user.id } }); //сахранение
    return res.send(true);
  }
  async createType(req, res) {
    const { title } = req.body;
    const candidate = await Model.findOne({ where: { title } });
    if (candidate) return res.json({ error: "Данная категория занята" });
    const type = await ModelType.create({ ...req.body });
    return res.json(type);
  }
  async getType(req, res) {
    const type = await ModelType.findAll();
    return res.json(type);
  }
}
module.exports = new Controller();
