const { Model, DataTypes } = require("sequelize")
const { v4: uuidv4 } = require('uuid');

class Messages extends Model{
  static init(sequelize){
    super.init({
      id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4()
      },
      admin_id:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      text: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.Users, { foreignKey: "user_id", as: "user_messages"})
  }
}

module.exports = Messages
