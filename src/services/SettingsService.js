const { update } = require("../models/Setting")
const setting = require("../models/Setting")

/* class SettingsController {
  async create(req, res) {
    const {username, chat } = req.body

    const userAlreadyExists = await setting.findOne({
      where:{ 
        username 
      }
    })

    if(userAlreadyExists){
      return res.json({
        message: "User already exists!"
      })
    }
    const user = await setting.create({
      username,
      chat
    })

    return res.json(user)
  }
}

module.exports = SettingsController */

module.exports = {
  async createSettings({username}) {
    const userAlreadyExists = await setting.findOne({
      where:{ 
        username: username
      }
    })

    if(userAlreadyExists){
      return ({message: "User already exists!"})
    }
    const user = await setting.create({
      username
    })

    return user
  },

  async findByUsername(username){
    const settings = await setting.findOne({
      where:{
        username: username
      }
    })

    return settings
  },

  async Update({username,chat}){
    await setting.update(
      {
        chat: chat
      },
      {
        where: {
          username: username
        }
      }
    )
  }
}