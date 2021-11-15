const Alert = require("../model/alert.model");
const dto = (body = {}) => {
  const { userId, projectId, information, message } = body;
  if (!userId) return;
  if (!projectId) return;
  if (!information) return;
  if (!message) return;
  return {
    userId: userId, // id пользователя
    projectId: projectId, //id проекта
    message: message, //кратное сообщеие
    information: information, //полное сообщение
  };
};
class Controller {
  async findAll(req, res) {
    //получение всех оповещений
    const alert = await Alert.findAll({ where: { userId: req.user.id } });
    return res.json(alert);
  }
  async findById(req, res) {
    //получение определенного оповещения
    const alert = await Alert.findByPk(req.params.id);
    return res.json(alert);
  }
}
class UtilAlert {
  async create(obj = {}) {
    if (!dto(obj)) return res.json();
    const alert = await Alert.create(dto(obj));
    return res.json(alert);
  }
}
module.exports = { Controller, UtilAlert };
