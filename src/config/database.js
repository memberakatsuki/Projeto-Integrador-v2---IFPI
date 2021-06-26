const Sequelize = require("sequelize")
const db_production = new Sequelize( process.env.DATABASE_URL,{
  dialect: process.env.DB_DIALECT,
  dialectOptions:{
    ssl:{
      require: true,
      rejectUnauthorized: false
    }
  },
  define:{
    timestamps: true,
    underscored: true
  }
})

const db_developer = new Sequelize({
  dialect: process.env.DB_DIALECT_DEV,
  username: process.env.DB_USERNAME_DEV,
  password: process.env.DB_PASSWORD_DEV,
  host: process.env.DB_HOST_DEV,
  database: process.env.DB_DATABASE_DEV,
  define:{
    timestamps: true,
    underscored: true
  }
})

module.exports = {
  db_production,
  db_developer
}