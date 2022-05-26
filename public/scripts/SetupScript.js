const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const UserQueries = require("./SQL/UserQueries");
const CustomerQueries = require("./SQL/CustomerQueries");
const TicketQueries = require("./SQL/TicketQueries");
const ProductQueries = require("./SQL/ProductQueries");
const ServiceQueries = require("./SQL/ServiceQueries");
const EquipmentQueries = require("./SQL/EquipmentQueries");
const SaleQueries = require("./SQL/SaleQueries");
const InvoiceQueries = require("./SQL/InvoiceQueries");

module.exports = {
  // Script to create file paths, settings.json, and db file
  setupScript: async (event, config) => {
    try {
      fs.readFile(
        "C:\\Program Files\\FastCRM\\Locals\\settings.json",
        (err, data) => {
          if (err) throw err;
          let JSONData = JSON.parse(data);
          JSONData.FIRST_RUN = true;
          let JSONDataAsString = JSON.stringify(JSONData, null, 2);
          fs.writeFileSync(
            "C:\\Program Files\\FastCRM\\Locals\\settings.json",
            JSONDataAsString
          );
        }
      );

      fs.closeSync(
        fs.openSync("C:\\Program Files\\FastCRM\\Locals\\fastcrm.db", "w")
      );

      const db = new sqlite3.Database(
        "C:\\Program Files\\FastCRM\\Locals\\fastcrm.db",
        sqlite3.OPEN_READWRITE,
        (err) => {
          if (err) console.log(err);
          console.log("connection successful");
        }
      );

      db.serialize(() => {
        db.run(UserQueries.createTableUser());
        db.run(UserQueries.createTableUserRole());
        db.run(UserQueries.createTableUserHasRole());
        db.run(UserQueries.createTableUserStatus());
        db.run(UserQueries.insertUserStatus());
        db.run(UserQueries.createTableUserHasStatus());
        db.run(CustomerQueries.createTableCustomer());
        db.run(CustomerQueries.createTableCustomerNote());
        db.run(CustomerQueries.createTableCustomerStatus());
        db.run(CustomerQueries.insertCustomerStatus());
        db.run(CustomerQueries.createTableCustomerHasStatus());
        db.run(TicketQueries.createTableTicket());
        db.run(TicketQueries.createTableTicketUpdate());
        db.run(TicketQueries.createTableTicketStatus());
        db.run(TicketQueries.insertTicketStatus());
        db.run(ProductQueries.createTableProduct());
        db.run(ProductQueries.createTableProductStock());
        db.run(ProductQueries.createTableProductSaleItem());
        db.run(ServiceQueries.createTableOneTimeService());
        db.run(ServiceQueries.createTableOneTimeServiceSaleItem());
        db.run(ServiceQueries.createTableContinuousService());
        db.run(ServiceQueries.createTableContinuousServiceSaleItem());
        db.run(EquipmentQueries.createTableEquipment());
        db.run(EquipmentQueries.createTableEquipmentStatus());
        db.run(EquipmentQueries.createTableEquipmentTransactionItem());
        db.run(EquipmentQueries.createTableEquipmentTransactionType());
        db.run(SaleQueries.createTableSale());
        db.run(SaleQueries.createTableSaleStatus());
        db.run(SaleQueries.insertSaleStatus());
        db.run(InvoiceQueries.createTableInvoice());
        db.run(InvoiceQueries.createTableInvoiceStatus());
        db.run(InvoiceQueries.insertInvoiceStatus());
        db.close((err) => {
          if (err) throw err;
        });
      });
    } catch (error) {
      throw error;
    }
  },
};
