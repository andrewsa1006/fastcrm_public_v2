// Assume for the purposes of the MVP that the database file and the settings.json already exist.
const { ipcRenderer, contextBridge } = require("electron");

// Expose protected methods off of window (ie.
// window.api.sendToA) in order to use ipcRenderer
// without exposing the entire object
contextBridge.exposeInMainWorld("api", {
  firstRun: () => ipcRenderer.invoke("CHECK_SETUP_STATUS"),

  completeSetup: (config) => {
    ipcRenderer.send("COMPLETE_SETUP", config);
  },
});
