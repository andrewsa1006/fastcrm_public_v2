const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const QueryObject = require("./QueryObject");

module.exports = {
  // Script to create file paths, settings.json, and db file
  finishSetup: async (event, config) => {
    try {
      await fs.readFile(
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

      let dbCreated = await fs.openSync(
        "C:\\Program Files\\FastCRM\\Locals\\fastcrm.db",
        "w"
      );
      await fs.closeSync(dbCreated);
      const db = await new sqlite3.Database(
        "C:\\Program Files\\FastCRM\\Locals\\fastcrm.db",
        sqlite3.OPEN_READWRITE,
        (err) => {
          if (err) console.log(err);
          console.log("connection successful");
        }
      );

      await db.serialize(() => {
        db.run(
          `CREATE TABLE user (id INTEGER PRIMARY KEY, first_name, last_name, username, hashed_password, email, permissions)`
        );
        const stmt = db.prepare(
          "INSERT INTO user (first_name, last_name, username, email, hashed_password, permissions) VALUES (?,?,?,?,?,?)"
        );
        stmt.run(
          "Andrew",
          "Atwood",
          "Rageclinic",
          "123123123",
          "rageclinic@123goog.com",
          "admin"
        );
        stmt.finalize();
        db.each("SELECT id AS id, first_name FROM user", (err, row) => {
          console.log(row.id + ": " + row.first_name);
        });
      });
    } catch (error) {
      throw error;
    }
  },
};
