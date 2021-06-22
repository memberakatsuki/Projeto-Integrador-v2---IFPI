const connection = require("../models/Connection")

class ConnectionsService {
  async createConnection({socket_id, user_id,admin_id,id}){
    const create_connections = await connection.create({
      id,
      user_id,
      admin_id,
      socket_id
    })
    return create_connections
  }

  async findByUserId(user_id){
    const connections = await connection.findOne({
      where:{
        user_id
      }
    })
    return connections
  }

  async findAllWithoutAdmin(){
    const connections = await connection.findAll({
      where:{
        admin_id : null
      },
      include: {
        association: "users_connections",
      },
    })

    return connections
  }
  
  async findBySocketID(socket_id){
    const connections = await connection.findOne({
      where:{
        socket_id: socket_id
      }
    })
    return connections
  }

  async updateAdminID({user_id, admin_id}){
    await connection.update(
      {
        admin_id: admin_id
      },
      {
        where: {
          user_id: user_id
        }
      }
    )
  }

  async deleteBySocketId(socket_id){
    await connection.destroy({
      where:{
        socket_id: socket_id
      }
    })
  }
}

module.exports = ConnectionsService