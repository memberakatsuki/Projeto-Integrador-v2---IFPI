module.exports = {
  dialect: "postgres",
  host: process.env.,
  username: "postgres",
  password: "sdev18010",
  database: process.env.DATABASE_URL,
  define: {
    timestamps: true,
    underscored: true,
  },
};
