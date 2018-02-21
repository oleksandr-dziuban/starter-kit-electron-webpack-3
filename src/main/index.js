import { app, BrowserWindow, Notification } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production';
let mainWindow;

/**
 * Create initial application window
 * @returns {Electron.BrowserWindow}
 */
const createMainWindow = () => {
  const window = new BrowserWindow({
    show: false,
  });

  if (isDevelopment) {
    window.webContents.openDevTools();
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  }
  else {
    window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }));
  }

  window.once('ready-to-show', () => {
    window.maximize();
    window.show();
  });

  window.on('closed', () => {
    mainWindow = null
  });

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus()
    });
  });

  return window;
};

/**
 * Show initial application notification
 * @returns {Electron.Notification}
 */
const showNotification = () => {
  const myNotification = new Notification({
    title: 'Welcome to Electron Starter Kit',
    body: 'Enjoy!'
  });

  myNotification.show();
};

// Application start
app.on('ready', () => {
  mainWindow = createMainWindow();
  showNotification();
});

// Application reactivation
app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// Application quit
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
