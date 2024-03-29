import path from 'path';
import {format} from 'url';
import {app, BrowserWindow} from 'electron';
import {is} from 'electron-util';

let win: BrowserWindow | undefined;

async function createWindow() {
	win = new BrowserWindow({
		width: 800,
		height: 820,
		minHeight: 600,
		minWidth: 650,
		vibrancy: 'under-window',
		frame: false,
		titleBarStyle: 'hiddenInset',
		webPreferences: {
			nodeIntegration: true,
			devTools: true,
			contextIsolation: false,
		},
		show: false,
	});

	if (is.development) {
		void win.loadURL('http://localhost:9080');
	} else {
		void win.loadURL(
			format({
				pathname: path.join(__dirname, 'index.html'),
				protocol: 'file',
				slashes: true,
			}),
		);
	}

	win.on('closed', () => {
		win = undefined;
	});

	win.webContents.on('devtools-opened', () => {
		win!.focus();
	});

	win.on('ready-to-show', () => {
		win!.show();
		win!.focus();

		if (is.development) {
			win!.webContents.openDevTools({
				mode: 'detach',
			});
		}
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (is.macos) {
		return;
	}

	app.quit();
});

app.on('activate', () => {
	if (!app.isReady()) {
		return;
	}

	if (win) {
		win.show();
	} else {
		void createWindow();
	}
});
