const Sequelize = require("sequelize")
const config   = require("../config/database")
const Setting = require("../models/Setting")
const User = require("../models/User")
const Message = require("../models/Message")
const Connection = require("../models/Connection")

const connection = new Sequelize({
  dialect: "postgres",
  username: "ytubbkfa",
  password: "xFmH6Wlkzv3OEJobdzsrosJN7EARRejt",
  host: "batyr.db.elephantsql.com",
  dialectOptions:{
    ssl:{
      rejectUnauthorized: true
    }
  }
})

connection
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.log("Unable to connect to the database:", err))

Setting.init(connection)
User.init(connection)
Message.init(connection)
Connection.init(connection)


Message.associate(connection.models)
User.associate(connection.models)
Connection.associate(connection.models)

module.exports = connection
