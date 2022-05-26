module.exports = {
  // --------- TABLE CREATES -----------
  // User Tables
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

  // Customer Tables
  createTableCustomer: () => {
    let sql = `CREATE TABLE IF NOT EXISTS customer (id INTEGER PRIMARY KEY, name, description, address_one, address_two, primary_poc, primary_poc_phone, primary_poc_email, finance_phone, finance_email)`;
    return sql;
  },

  createTableCustomerStatus: () => {
    let sql = `CREATE TABLE IF NOT EXISTS customer_status (id INTEGER PRIMARY KEY, status_name)`;
    return sql;
  },

  createTableCustomerHasStatus: () => {
    let sql = `CREATE TABLE IF NOT EXISTS customer_has_status (id INTEGER PRIMARY KEY, status_start_time, status_end_time, customer_id, status_id)`;
    return sql;
  },

  // Ticket Tables
  createTableTicket: () => {
    let sql = `CREATE TABLE IF NOT EXISTS ticket (id INTEGER PRIMARY KEY, customer_id, date, poc, poc_phone, poc_email, ticket_body, status_id)`;
    return sql;
  },

  createTableTicketUpdate: () => {
    let sql = `CREATE TABLE IF NOT EXISTS ticket_update (id INTEGER PRIMARY KEY, ticket_id, date, poc, poc_phone, poc_email, update_body, status_id)`;
    return sql;
  },

  createTableTicketStatus: () => {
    let sql = `CREATE TABLE IF NOT EXISTS ticket_status (id INTEGER PRIMARY KEY, status_name)`;
    return sql;
  },

  // Product Tables
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

  // Services Tables
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

  // Equipment Tables
  createTableEquipment: () => {
    let sql = `CREATE TABLE equipment (id INTEGER PRIMARY KEY, name, type_id, serial_number, model_number, price, tax_percentage, active_for_sale, active_for_rent, status_id)`;
    return sql;
  },

  createTableEquipmentStatus: () => {
    let sql = `CREATE TABLE equipment_status (id INTEGER PRIMARY KEY, status)`;
    return sql;
  },

  createTableEquipmentType: () => {
    let sql = `CREATE TABLE equipment_type (id INTEGER PRIMARY KEY, type)`;
    return sql;
  },

  createTableEquipmentTransactionType: () => {
    let sql = `CREATE TABLE equipment_type (id INTEGER PRIMARY KEY, transaction_type)`;
    return sql;
  },

  createTableEquipmentTransactionItem: () => {
    let sql = `CREATE TABLE equipment_transaction_item (id INTEGER PRIMARY KEY, equipment_id, transaction_type_id, price, tax_amount)`;
    return sql;
  },

  // Sales Tables
  createTableSale: () => {
    let sql = `CREATE TABLE sale (id INTEGER PRIMARY KEY, customer_id, date, invoice_id, sale_amount, sale_amount_paid, tax_amount, sale_status_id, user_has_role_id)`;
    return sql;
  },

  createTableSaleStatus: () => {
    let sql = `CREATE TABLE sale_status (id INTEGER PRIMARY KEY, status)`;
    return sql;
  },

  // Invoice Tables
  createTableInvoice: () => {
    let sql = `CREATE TABLE invoice (id INTEGER PRIMARY KEY, customer_id, sale_id, date_issued, date_due, line_items, amount, notes, status_id)`;
    return sql;
  },

  createTableInvoiceStatus: () => {
    let sql = `CREATE TABLE invoice_status (id INTEGER PRIMARY KEY, status)`;
    return sql;
  },
};
