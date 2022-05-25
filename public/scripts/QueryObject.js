const sqlite3 = require("sqlite3").verbose();

module.exports = {
  createTableUsers: `CREATE TABLE user (id INTEGER PRIMARY KEY, first_name, last_name, username, hashed_password, email, permissions)`,
};
