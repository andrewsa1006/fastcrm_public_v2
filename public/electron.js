const path = require("path");
const ScriptObject = require("./scripts/ScriptObject");

const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");

function createWindow(width, height) {
  // Create the browser window.
  const win = new BrowserWindow({
    frame: true,
    width: width,
    height: height,
    show: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      // enableRemoteModule: true,
      // sandbox: true,
      preload: path.join(__dirname, "../src/preload.js"),
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // let splash = new BrowserWindow({
  //   width: 500,
  //   height: 300,
  //   transparent: true,
  //   frame: false,
  //   alwaysOnTop: true,
  // });

  // splash.loadFile(`${path.join(__dirname, "../public/splash.html")}`);
  // splash.center();
  // setTimeout(function () {
  //   splash.close();
  //   win.center();
  //   win.show();
  // }, 6000);

  // ---------- Event Handling ------------
  // Check setup status on initial app load
  ipcMain.on("CHECK_SETUP_STATUS", (event, arg) => {});

  // Complete setup, create file paths, setup database, store local settings.
  ipcMain.on("COMPLETE_SETUP", (event, config) => {
    const resolveSetup = new Promise((resolve, reject) => {
      resolve(ScriptObject.finishSetup(event, config));
    });
    resolveSetup.then(() => {
      // console.log(config);
    });
  });

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  const { screen } = require("electron");
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;
  createWindow(width, height);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
