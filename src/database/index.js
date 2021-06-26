const Sequelize = require("sequelize")
const Setting = require("../models/Setting")
const User = require("../models/User")
const Message = require("../models/Message")
const Connection = require("../models/Connection")

const connection = new Sequelize( process.env.DATABASE_URL,{
  dialect: process.env.DB_DIALECT,
  dialectOptions:{
    ssl:{
      require: true,
      rejectUnauthorized: false
    }
  },
  define:{
    timestamps: true,
    underscored: true
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
