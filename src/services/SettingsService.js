const setting = require("../models/Setting")

class SettingsService {
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
  }

  async findByUsername(username){
    const settings = await setting.findOne({
      where:{
        username: username
      }
    })

    return settings
  }

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

module.exports = SettingsService