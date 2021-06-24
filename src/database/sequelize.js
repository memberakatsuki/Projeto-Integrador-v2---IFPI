//const { Sequelize } = require("sequelize")
const sequelize   = require("../config/database")
const Setting = require("../models/Setting")
const User = require("../models/User")
const Message = require("../models/Message")
const Connection = require("../models/Connection")


Setting.init(sequelize)
User.init(sequelize)
Message.init(sequelize)
Connection.init(sequelize)


Message.associate(sequelize.models)
User.associate(sequelize.models)
Connection.associate(sequelize.models)

module.exports = sequelize
