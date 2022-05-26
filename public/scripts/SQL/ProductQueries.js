module.exports = {
  // Table Creates
  createTableProduct: () => {
    let sql = `CREATE TABLE product (id INTEGER PRIMARY KEY, name, price_per_unit, basic_unit, tax_percentage, limited, active_for_sale)`;
    return sql;
  },

  createTableProductStock: () => {
    let sql = `CREATE TABLE product_stock (id INTEGER PRIMARY KEY, number_in_stock, last_update_time)`;
    return sql;
  },

  createTableProductSaleItem: () => {
    let sql = `CREATE TABLE product_sale_item (id INTEGER PRIMARY KEY, quantity_sold, price_per_unit, price, tax_amount, sale_id, product_id)`;
    return sql;
  },

  // Table Inserts
  insertProduct: () => {
    let sql = `INSERT INTO product (name, price_per_unit, basic_unit, tax_percentage, limited, active_for_sale) VALUES (?, ?, ?, ?, ?, ?)`;
    return sql;
  },

  insertProductStock: () => {
    let sql = `INSERT INTO product_stock (number_in_stock, last_update_time) VALUES (?, ?)`;
    return sql;
  },

  insertProductSaleItem: () => {
    let sql = `INSERT INTO product_sale_item (quantity_sold, price_per_unit, price, tax_amount, sale_id, product_id) VALUES (?, ?, ?, ?, ?, ?)`;
    return sql;
  },

  // Table Updates
};
