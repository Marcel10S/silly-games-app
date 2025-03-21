const { app, BrowserWindow } = require("electron");

let mainWindow;

async function createWindow() {
    mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        height: 650,
        minHeight: 650,
        minWidth: 1024,
        resizable: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            nodeIntegrationInWorker: true,
        },
        width: 1024,
    });

    await mainWindow.loadFile('public/index.html')
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
