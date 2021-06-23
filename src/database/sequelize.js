//const Sequelize = require("sequelize")
//const config = require("../config/database")

const { Sequelize } = require("sequelize")
const Settings = require("../models/Setting")
const Users = require("../models/User")
const Messages = require("../models/Message")
const Connections = require("../models/Connection")

//const connection = new Sequelize(config)
const sequelize = new Sequelize( process.env.DATABASE_URL, {
  dialectOptions:{
    ssl:{
      rejectUnauthorized: false
    }
  }
})

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.log("Unable to connect to the database:", err))

Settings.init(sequelize)
Users.init(sequelize)
Messages.init(sequelize)
Connections.init(sequelize)


Messages.associate(sequelize.models)
Users.associate(sequelize.models)
Connections.associate(sequelize.models)

module.exports = sequelize