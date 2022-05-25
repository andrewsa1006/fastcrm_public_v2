// Assume for the purposes of the MVP that the database file and the settings.json already exist.
const { ipcRenderer, contextBridge } = require("electron");
const fs = require("fs");

let isFirstRun = false;
fs.readFile(
  "C:\\Program Files\\FastCRM\\Locals\\settings.json",
  (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);
    isFirstRun = jsonData.FIRST_RUN;
  }
);

// Expose protected methods off of window (ie.
// window.api.sendToA) in order to use ipcRenderer
// without exposing the entire object
contextBridge.exposeInMainWorld("api", {
  firstRun: () => {
    return isFirstRun;
  },
  completeSetup: (config) => {
    ipcRenderer.send("COMPLETE_SETUP", config);
  },
});
