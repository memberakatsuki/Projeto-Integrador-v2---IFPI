const { ListByUser } = require("../services/MessagesService")

module.exports = {
  async showByUser(req, res) {
    const { id } = req.params;
    const list = await ListByUser(id)
    return res.json(list);
  },
};
