'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Connections', { 
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      admin_id:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_id:{
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'users', key: 'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      socket_id:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('connections');
    
  }
};
