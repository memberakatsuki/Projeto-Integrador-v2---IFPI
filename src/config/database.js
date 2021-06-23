const { Sequelize } = require("sequelize")

const sequelize = new Sequelize( process.env.DATABASE_URL, {
  dialectOptions:{
    ssl:{
      rejectUnauthorized: false
    }
  }
})

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.log("Unable to connect to the database:", err))

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