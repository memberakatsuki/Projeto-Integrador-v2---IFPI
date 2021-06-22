const { Model, DataTypes } = require("sequelize")
const { v4: uuidv4 } = require('uuid');

class Connection extends Model{
  static init(sequelize){
    super.init({
      id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4()
      },
      user_id: {
        type: DataTypes.UUID
      },
      admin_id:{
        type: DataTypes.UUID,
        allowNull: true,
      },
      socket_id: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: "user_id", as: "users_connections"})
  }
}

module.exports = Connection