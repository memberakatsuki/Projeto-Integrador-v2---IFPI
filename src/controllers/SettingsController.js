const { findByUsername, createSettings,Update } = require("../services/SettingsService")

module.exports = {
  async findByUserSettings(req,res){
    const { username } = req.params
    const settings = await findByUsername(username)
    return res.json(settings)
  },

  async create(req, res) {
    const { username } = req.body
    const user = await createSettings({
      username
    })
    return res.json(user)
  },

  async update(req,res){
    const { username } = req.params
    const { chat } = req.body

    const settings = await Update({
      username,
      chat
    })
    return res.json(settings)
  }
}
