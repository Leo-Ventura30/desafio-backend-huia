module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db/huia.sqlite3",
  },
  test: {
    dialect: "sqlite",
    storage: ":memory",
  },
  production: {
    dialect: "sqlite",
    storage: "../../db/huia.sqlite3",
  },
};
