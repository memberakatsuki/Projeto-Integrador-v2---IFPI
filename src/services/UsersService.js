const user = require("../models/User")

class UsersService {
  async createUsers(email){
    const userExists = await user.findOne({
      where:{
        email
      }
    })
    
    if(userExists){
      return userExists
    }
    
    const userCreate = await user.create({
      email
    })
    return userCreate
  }

  async findByEmail(email){
    const findEmail = await user.findOne({
      where:{
        email
      }
    })
  
    return findEmail
  }
}

module.exports = UsersService