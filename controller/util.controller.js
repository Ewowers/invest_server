const Region = require("../model/util/region.mode");
const Question = require("../model/util/question.model");
const State = require("../model/util/state.model");
class Controller {
  async regionFindAll(req, res) {
    //получение всех городов
    const region = await Region.findAll();
    return res.json(region);
  }
  async questionFindAll(req, res) {
    //получение все вопрос проекта
    const question = await Question.findAll();
    return res.json(question);
  }
  async questionCreate(req, res) {
    //создание вопроса для проекта
    const question = await Question.create({ value: req.body.value });
    return res.json(question);
  }
  async stateFindAll(req, res) {
    //получение все статуса проекта
    const state = await State.findAll();
    return res.json(state);
  }
  async stateCreate(req, res) {
    //создание статуса проекта
    const state = await State.create({ value: req.body.value });
    return res.json(state);
  }
}
module.exports = new Controller();
