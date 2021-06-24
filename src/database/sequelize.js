//const { Sequelize } = require("sequelize")
const sequelize   = require("../config/database")
const Settings = require("../models/Setting")
const Users = require("../models/User")
const Messages = require("../models/Message")
const Connections = require("../models/Connection")


Settings.init(sequelize)
Users.init(sequelize)
Messages.init(sequelize)
Connections.init(sequelize)


Messages.associate(sequelize.models)
Users.associate(sequelize.models)
Connections.associate(sequelize.models)

module.exports = sequelize
