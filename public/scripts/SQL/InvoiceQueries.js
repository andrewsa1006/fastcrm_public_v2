module.exports = {
  // Table Creates
  createTableInvoice: () => {
    let sql = `CREATE TABLE invoice (id INTEGER PRIMARY KEY, customer_id, sale_id, date_issued, date_due, line_items, amount, notes, status_id)`;
    return sql;
  },

  createTableInvoiceStatus: () => {
    let sql = `CREATE TABLE invoice_status (id INTEGER PRIMARY KEY, status)`;
    return sql;
  },
  // Table Inserts
  insertInvoice: () => {
    let sql = `INSERT INTO invoice (customer_id, sale_id, date_issued, date_due, line_items, amount, notes, status_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    return sql;
  },

  insertInvoiceStatus: () => {
    let sql = `INSERT INTO invoice_status (status) VALUES ('open'), ('pending'), ('closed'), ('past_due')`;
    return sql;
  },

  // Table Updates
};
