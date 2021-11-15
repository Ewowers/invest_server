const Page = require("../../model/admin/page.model");
class Controller {
  async find(req, res) {
    const pages = await Page.findAll();
    return res.json(pages);
  }
  async create(req, res) {
    try {
      const { title } = req.body;
      const candidate = await Page.findOne({ where: { title } });
      if (candidate) return res.json({ error: "Название или ссылка занята" });
      const page = await Page.create({ ...req.body });
      return res.json(page);
    } catch (e) {
      console.log(e);
    }
  }
  async update(req, res) {
    const { id } = req.params;
    const projectType = await Page.update({ ...req.body }, { where: { id: id } });
    return res.json(projectType);
  }
  async remove(req, res) {
    const { id } = req.params;
    const projectType = await Page.destroy({ where: { id: id } });
    return res.json(projectType);
  }
  async findOne(req, res) {
    const { id } = req.params;
    const page = await Page.findByPk(id);
    return res.json(page);
  }
}
module.exports = new Controller();
