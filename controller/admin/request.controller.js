const Request = require("../../model/admin/request.model");
const User = require("../../model/user.model");
const Project = require("../../model/project.model");
class Controller {
  async applicant(req, res) {
    if (!req.user) return res.json({ error: true });
    const user = { username: req.user.username, id: req.user.id };
    const request = await Request.create({ ...req.body, user });
    return res.json(request);
  }
  async findAll(req, res) {
    const requests = await Request.findAll();
    return res.json(requests);
  }
  async update(req, res) {
    const request = await Request.findByPk(req.params.id);
    let { user, project } = request;
    user = await User.findOne({ where: { id: user.id, username: user.username } });
    project = await Project.findOne({ where: { id: project.id, title: project.title } });
    user.investment.push({ money: request.money, project: request.project });
    project.money = String(Number(project.money) + Number(request.money));
    await User.update({ investment: user.investment }, { where: { id: user.id } });
    await Project.update({ money: project.money }, { where: { id: project.id } });
    await Request.update({ status: true }, { where: { id: request.id } });
    return res.end();
  }
}
module.exports = new Controller();
