module.exports = {
  // Table creates
  createTableUser: () => {
    let sql = `CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, first_name, last_name, username, hashed_password, email)`;
    return sql;
  },

  createTableUserRole: () => {
    let sql = `CREATE TABLE IF NOT EXISTS user_role (id INTEGER PRIMARY KEY, role)`;
    return sql;
  },

  createTableUserHasRole: () => {
    let sql = `CREATE TABLE IF NOT EXISTS user_has_role (id INTEGER PRIMARY KEY, role_start_time, role_end_time, user_account_id, role_id)`;
    return sql;
  },

  createTableUserStatus: () => {
    let sql = `CREATE TABLE IF NOT EXISTS user_status (id INTEGER PRIMARY KEY, status)`;
    return sql;
  },

  createTableUserHasStatus: () => {
    let sql = `CREATE TABLE IF NOT EXISTS user_has_status (id INTEGER PRIMARY KEY, status_start_time, status_end_time, user_account_id, status_id)`;
    return sql;
  },

  // Table Inserts
  insertUser: () => {
    let sql = `INSERT INTO user (first_name, last_name, username, hashed_password, email) VALUES (?, ?, ?, ?, ?)`;
    return sql;
  },

  insertUserRoles: () => {
    let sql = `INSERT INTO user_role (role) VALUES ('admin'), ('reader'), ('read_write'), ('super_user')`;
    return sql;
  },

  insertUserHasRole: () => {
    let sql = `INSERT INTO user_has_role (role_start_time, role_end_time, user_account_id, role_id) VALUES (?, ?, ?, ?)`;
    return sql;
  },

  insertUserStatus: () => {
    let sql = `INSERT INTO user_status (status) VALUES ('active'), ('pending'), ('inactive'), ('deleted')`;
    return sql;
  },

  insertUserHasStatus: () => {
    let sql = `INSERT INTO user_has_status (status_start_time, status_end_time, user_account_id, status_id) VALUES (?, ?, ?, ?)`;
    return sql;
  },

  // Table Updates
};
