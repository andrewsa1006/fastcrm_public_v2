module.exports = {
  // Table Creates
  createTableTicket: () => {
    let sql = `CREATE TABLE IF NOT EXISTS ticket (id INTEGER PRIMARY KEY, customer_id, date, poc, poc_phone, poc_email, user_id, ticket_body, status_id)`;
    return sql;
  },

  createTableTicketUpdate: () => {
    let sql = `CREATE TABLE IF NOT EXISTS ticket_update (id INTEGER PRIMARY KEY, ticket_id, date, poc, poc_phone, poc_email, user_id, update_body, status_id)`;
    return sql;
  },

  createTableTicketStatus: () => {
    let sql = `CREATE TABLE IF NOT EXISTS ticket_status (id INTEGER PRIMARY KEY, status)`;
    return sql;
  },

  // Table Inserts
  insertTicket: () => {
    let sql = `INSERT INTO ticket (customer_id, date, poc, poc_phone, poc_email, user_id, ticket_body, status_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    return sql;
  },

  insertTicketUpdate: () => {
    let sql = `INSERT INTO ticket (ticket_id, date, poc, poc_phone, poc_email, user_id, update_body, status_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    return sql;
  },

  insertTicketStatus: () => {
    let sql = `INSERT INTO ticket_status (status) VALUES ('open'), ('closed_resolved'), ('closed_no_contact'), ('deleted'), ('escalated')`;
    return sql;
  },

  // Table Updates
};
