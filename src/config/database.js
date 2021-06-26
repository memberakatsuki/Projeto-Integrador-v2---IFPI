module.exports = {
  dialect: process.env.DB_DIALECT_DEV,
  username: process.env.DB_USERNAME_DEV,
  password: process.env.DB_PASSWORD_DEV,
  host: process.env.DB_HOST_DEV,
  database: process.env.DB_DATABASE_DEV,
  define:{
    timestamps: true,
    underscored: true
  }
}