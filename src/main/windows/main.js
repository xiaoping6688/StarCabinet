const {BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createMainWindow () {
    let win = new BrowserWindow({
        width: 960,
        height: 640,
        titleBarStyle: 'hidden-inset',
        resizable: false,
        frame: true // Specify false to create a Frameless Window. Default is true.
    })

    win.setMenu(null)

    win.loadURL(url.format({
        pathname: path.resolve(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    return win
}

module.exports = createMainWindow
