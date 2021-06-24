const { Model, DataTypes } = require("sequelize")
const { v4: uuidv4 } = require('uuid');

class Users extends Model{
  static init(sequelize){
    super.init({
      id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4()
      },
      email: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.Messages, { foreignKey: "user_id", as: "messages"})
    this.hasMany(models.Connections, { foreignKey: "user_id", as: "connections"})
  }
}

module.exports = Users