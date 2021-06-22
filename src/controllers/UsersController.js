const UsersService = require("../services/UsersService")
const usersService = new UsersService


class UsersController{
  async create(req,res){
    const { email } = req.body
    const user = await usersService.createUsers(email)
    return res.json(user)
  }
}

module.exports = UsersController