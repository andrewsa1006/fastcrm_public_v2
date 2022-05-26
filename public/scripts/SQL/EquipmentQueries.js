module.exports = {
  // Table Creates
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
  // Table Inserts
  insertEquipment: () => {
    let sql = `INSERT INTO equipment (name, type_id, serial_number, model_number, price, tax_percentage, active_for_sale, active_for_rent, status_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    return sql;
  },

  insertEquipmentStatus: () => {
    let sql = `INSERT INTO equipment_status (status) VALUES ('active'), ('pending'), ('frozen'), ('disabled'), ('damaged')`;
    return sql;
  },

  insertEquipmentType: () => {
    let sql = `INSERT INTO equipment_type (type) VALUES (?)`;
    return sql;
  },

  insertEquipmentTransactionType: () => {
    let sql = `INSERT INTO equipment_type (transaction_type) VALUES ('rented'), ('sold'), ('pending_sale'), ('leased')`;
    return sql;
  },

  insertEquipmentTransactionItem: () => {
    let sql = `INSERT INTO equipment_transaction_item (equipment_id, transaction_type_id, price, tax_amount) VALUES (?, ?, ?, ?)`;
    return sql;
  },

  // Table Updates
};
