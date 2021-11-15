const FeedBack = require("../../model/admin/feedback.model");
const dto = (body) => {
  const { name, phone, email, message } = body;
  return {
    name: name, //Имя
    phone: phone, //Телефон
    email: email, //Почта
    message: message, //Сообщение
    use: false, //получен ответ
  };
};
class Controller {
  async create(req, res) {
    const body = dto(req.body);
    const feedback = await FeedBack.create(body);
    return res.json(feedback);
  }
  async findAll(req, res) {
    //получение всех ответов
    if (req.user.role.indexOf("admin")) return res.end(); //проверка на админа
    const feedback = await FeedBack.findAll();
    return res.json(feedback);
  }
  async update(req, res) {
    const { id } = req.params; //id
    await FeedBack.update({ use: true }, { where: { id } }); //на сообщение ответили
    return res.json({ message: true });
  }
}
module.exports = Controller;
