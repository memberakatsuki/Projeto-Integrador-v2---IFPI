const { Model, DataTypes } = require("sequelize")
const { v4: uuidv4 } = require('uuid');

class Setting extends Model{
  static init(sequelize){
    super.init({
      id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4()
      },
      username: DataTypes.STRING,
      chat: DataTypes.BOOLEAN
    }, {
      sequelize
    })
  }
}

module.exports = Setting