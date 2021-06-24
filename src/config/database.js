'use strict'

const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions:{
    ssl: {
      rejectUnauthorized: false
    }
  }
})

module.exports = sequelize

/* module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'sdev18010',
  database: 'sequelize',
  define: {
    timestamps: true,
    underscored: true
  },
} */