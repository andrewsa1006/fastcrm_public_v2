module.exports = {
  // Table Creates
  createTableOneTimeService: () => {
    let sql = `CREATE TABLE one_time_service (id INTEGER PRIMARY KEY, name, price, tax_percentage, active_for_sale)`;
    return sql;
  },

  createTableOneTimeServiceSaleItem: () => {
    let sql = `CREATE TABLE one_time_service_sale_item (id INTEGER PRIMARY KEY, price, tax_amount, sale_id, service_id, salesperson_role_id)`;
    return sql;
  },

  createTableContinuousService: () => {
    let sql = `CREATE TABLE continuous_service (id INTEGER PRIMARY KEY, name, price_per_unit, basic_unit, tax_percentage, active_for_sale, default_renewal_period)`;
    return sql;
  },

  createTableContinuousServiceSaleItem: () => {
    let sql = `CREATE TABLE continuous_service_sale_item (id INTEGER PRIMARY KEY, quantity_sold, price_per_unit, price, tax_amount, sale_id, service_id, salesperson_role_id, start_date, end_date, automatic_renewal, automatic_renewal_period)`;
    return sql;
  },

  // Table Inserts
  insertOneTimeService: () => {
    let sql = `INSERT INTO one_time_service (name, price, tax_percentage, active_for_sale) VALUES (?, ?, ?, ?)`;
    return sql;
  },

  insertOneTimeServiceSaleItem: () => {
    let sql = `INSERT INTO one_time_service_sale_item (price, tax_amount, sale_id, service_id, salesperson_role_id) VALUES (?, ?, ?, ?, ?)`;
    return sql;
  },

  insertContinuousService: () => {
    let sql = `INSERT INTO continuous_service (name, price_per_unit, basic_unit, tax_percentage, active_for_sale, default_renewal_period) VALUES (?, ?, ?, ?, ?, ?)`;
    return sql;
  },

  insertContinuousServiceSaleItem: () => {
    let sql = `INSERT INTO continuous_service_sale_item (quantity_sold, price_per_unit, price, tax_amount, sale_id, service_id, salesperson_role_id, start_date, end_date, automatic_renewal, automatic_renewal_period) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    return sql;
  },

  // Table Updates
};
