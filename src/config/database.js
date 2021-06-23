module.exports = {
  dialect: "postgres",
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
  define: {
    timestamps: true,
    underscored: true,
  },
};
