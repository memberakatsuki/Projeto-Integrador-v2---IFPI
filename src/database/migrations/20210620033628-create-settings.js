'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Settings', { 
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      username:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      chat:{
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
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
     await queryInterface.dropTable('settings');
  }
};
