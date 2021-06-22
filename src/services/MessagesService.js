const message = require("../models/Message");

class MessagesService {
  async createMessages({ user_id, text, admin_id }) {
    const messages = await message.create({
      user_id,
      admin_id,
      text
    });

    return messages;
  }
  
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
  }

  async deleteMessages(user_id){
    await message.destroy({
      where:{
        user_id: user_id
      }
    })
  }
};

module.exports = MessagesService