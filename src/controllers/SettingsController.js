const SettingsService = require("../services/SettingsService")
const settingsService = new SettingsService


class SettingsController{

  async create(req, res) {
    const { username } = req.body
    const user = await settingsService.createSettings({
      username
    })
    return res.json(user)
  }

  async findByUserSettings(req,res){
    const { username } = req.params
    const settings = await settingsService.findByUsername(username)
    return res.json(settings)
  }


  async update(req,res){
    const { username } = req.params
    const { chat } = req.body

    const settings = await settingsService.Update({
      username,
      chat
    })
    return res.json(settings)
  }
}

module.exports = SettingsController