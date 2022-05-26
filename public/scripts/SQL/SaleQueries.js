module.exports = {
  // Table Creates
  createTableSale: () => {
    let sql = `CREATE TABLE sale (id INTEGER PRIMARY KEY, customer_id, date, invoice_id, sale_amount, sale_amount_paid, tax_amount, sale_status_id, user_has_role_id)`;
    return sql;
  },

  createTableSaleStatus: () => {
    let sql = `CREATE TABLE sale_status (id INTEGER PRIMARY KEY, status)`;
    return sql;
  },
  // Table Inserts
  insertSale: () => {
    let sql = `INSERT INTO sale (customer_id, date, invoice_id, sale_amount, sale_amount_paid, tax_amount, sale_status_id, user_has_role_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    return sql;
  },

  insertSaleStatus: () => {
    let sql = `INSERT INTO sale_status (status) VALUES ('completed'), ('pending'), ('canceled'), ('on_hold')`;
    return sql;
  },

  // Table Updates
};
