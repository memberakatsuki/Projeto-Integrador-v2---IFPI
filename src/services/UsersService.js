const user= require("../models/User")


/* class UsersControllers{
  async create(req,res){
    const { email } = req.body

    const userExists = await user.findOne({
      where:{
        email
      }
    })

    if(userExists){
      return res.json(userExists)
    }

    const userCreate = await user.create({
      email
    })
    return res.json(userCreate)
  } */
module.exports = {
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
  },

  async findByEmail(email){
    const findEmail = await user.findOne({
      where:{
        email
      }
    })
  
    return findEmail
  }
}