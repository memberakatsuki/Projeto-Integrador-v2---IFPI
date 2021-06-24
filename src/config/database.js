module.exports = {
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  dialectOptions:{
    ssl:{
      rejectUnauthorized:false
    }
  },
  define:{
    timestamps: true,
    underscored: true
  }
}