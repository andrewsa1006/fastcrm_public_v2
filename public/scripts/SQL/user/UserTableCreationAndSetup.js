module.exports = {
  createTableUser: () => {
    let sql = `CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, first_name, last_name, username, hashed_password, email)`;
    return sql;
  },

  createTableUserRole: () => {
    let sql = `CREATE TABLE IF NOT EXISTS user_role (id INTEGER PRIMARY KEY, role_name)`;
    return sql;
  },

  createTableUserHasRole: () => {
    let sql = `CREATE TABLE IF NOT EXISTS user_has_role (id INTEGER PRIMARY KEY, role_start_time, role_end_time, user_account_id, role_id)`;
    return sql;
  },

  createTableUserStatus: () => {
    let sql = `CREATE TABLE IF NOT EXISTS user_status (id INTEGER PRIMARY KEY, status_name)`;
    return sql;
  },

  createTableUserHasStatus: () => {
    let sql = `CREATE TABLE IF NOT EXISTS user_has_status (id INTEGER PRIMARY KEY, status_start_time, status_end_time, user_account_id, status_id)`;
    return sql;
  },
};
