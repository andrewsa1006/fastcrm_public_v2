module.exports = {
  // Table Creates
  createTableCustomer: () => {
    let sql = `CREATE TABLE IF NOT EXISTS customer (id INTEGER PRIMARY KEY, name, description, address_one, address_two, primary_poc, primary_poc_phone, primary_poc_email, finance_phone, finance_email)`;
    return sql;
  },

  createTableCustomerNote: () => {
    let sql = `CREATE TABLE IF NOT EXISTS customer_note (id INTEGER PRIMARY KEY, customer_id, date, note)`;
    return sql;
  },

  createTableCustomerStatus: () => {
    let sql = `CREATE TABLE IF NOT EXISTS customer_status (id INTEGER PRIMARY KEY, status)`;
    return sql;
  },

  createTableCustomerHasStatus: () => {
    let sql = `CREATE TABLE IF NOT EXISTS customer_has_status (id INTEGER PRIMARY KEY, status_start_time, status_end_time, customer_id, status_id)`;
    return sql;
  },

  // Table Inserts
  insertCustomer: () => {
    let sql = `INSERT INTO customer (name, description, address_one, address_two, primary_poc, primary_poc_phone, primary_poc_email, finance_phone, finance_email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    return sql;
  },

  insertCustomerNote: () => {
    let sql = `INSERT INTO customer_note (customer_id, note) VALUES (?, ?)`;
    return sql;
  },

  insertCustomerStatus: () => {
    let sql = `INSERT INTO customer_status (status) VALUES ('active'), ('pending'), ('inactive'), ('delinquent'), ('deleted'), ('suspended')`;
    return sql;
  },

  insertCustomerHasStatus: () => {
    let sql = `INSERT INTO customer_has_status (status_start_time, status_end_time, customer_id, status_id) VALUES (?, ?, ?, ?)`;
    return sql;
  },

  // Table Updates
};
