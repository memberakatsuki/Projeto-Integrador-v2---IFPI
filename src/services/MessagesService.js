const message = require("../models/Message");

/* class MessagesController{
  async create(req, res){
    const {  user_id, text, admin_id } = req.body

    const messages = await message.create({
      user_id,
      text,
      admin_id
    })

    return res.json(messages)
  }

  async showByUser(req,res){
    const { id } = req.params
      const list = await message.findAll({
        where:{
          user_id: id
        },
        include:{
          association: "user"
        }
      })
      return res.json(list)
  }
}

module.exports = MessagesController */

module.exports = {
  async createMessages({ user_id, text, admin_id }) {
    const messages = await message.create({
      user_id,
      admin_id,
      text
    });

    return messages;
  },
  async ListByUser( user_id ) {
    const list = await message.findAll({
      where: {
        user_id,
      },
      include: {
        association: "user_messages",
      },
    });
    return list;
  },

  async deleteMessages(user_id){
    await message.destroy({
      where:{
        user_id: user_id
      }
    })
  }
};
