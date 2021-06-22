const MessagesService = require("../services/MessagesService")
const messagesService = new MessagesService

class MessagesController{
  async create(req, res){
    const {  user_id, text, admin_id } = req.body
    const messages = await messagesService.createMessages({
      user_id,
      text,
      admin_id
    })
    return res.json(messages)
  }

  async showByUser(req, res) {
    const { id } = req.params;
    const list = await messagesService.ListByUser(id)
    return res.json(list);
  }
};

module.exports = MessagesController