const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080
  })

  if (process.env.NODE_ENV?.toLowerCase() !== 'development') {
    // Load production build
    win.loadFile(`dist/index.html`)
  } else {
    // enable dev tools
    win.webContents.openDevTools()
    // Load vite dev server page
    console.log('Development mode')
    win.loadURL('http://localhost:5173/')
  }
}

app.whenReady()
  .then(() => {
    createWindow()

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
