const Sequelize = require("sequelize")
const config = require("../config/database")

const Settings = require("../models/Setting")
const Users = require("../models/User")
const Messages = require("../models/Message")
const Connections = require("../models/Connection")

const connection = new Sequelize(config)

Settings.init(connection)
Users.init(connection)
Messages.init(connection)
Connections.init(connection)


Messages.associate(connection.models)
Users.associate(connection.models)
Connections.associate(connection.models)

module.exports = connection