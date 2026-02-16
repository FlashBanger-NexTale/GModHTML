// GameDetails function is called by GMod
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    document.getElementById('serverName').textContent = servername || 'Loading...';
    document.getElementById('mapName').textContent = 'Map: ' + (mapname || 'Loading...');
    document.getElementById('gamemode').textContent = 'Gamemode: ' + (gamemode || 'Loading...');
}

// SetStatusChanged function is called by GMod
function SetStatusChanged(status) {
    const statusElement = document.getElementById('status');
    const messages = {
        'Retrieving server info...': 'Connecting to server...',
        'Sending client info...': 'Authenticating...',
        'Parsing game info...': 'Loading game data...',
        'Workshop Complete': 'Loading assets...',
    };
    
    statusElement.textContent = messages[status] || status;
}

// SetFilesNeeded function is called by GMod
function SetFilesNeeded(needed) {
    // This function is triggered when downloading starts
}

// SetFilesTotal function is called by GMod  
function SetFilesTotal(total) {
    // Store total files count
    window.totalFiles = total;
}

// DownloadingFile function is called by GMod
function DownloadingFile(filename) {
    const shortName = filename.split('/').pop();
    document.getElementById('status').textContent = 'Downloading: ' + shortName;
}

// SetFilesProgress function is called by GMod - This updates the progress bar
let filesDownloaded = 0;

function SetFilesProgress(progress) {
    filesDownloaded = progress;
    updateProgress();
}

function updateProgress() {
    const totalFiles = window.totalFiles || 1;
    const percentage = Math.floor((filesDownloaded / totalFiles) * 100);
    
    document.getElementById('progress').style.width = percentage + '%';
    document.getElementById('percentage').textContent = percentage + '%';
}

// Custom animation loop (optional)
let dots = 0;
setInterval(() => {
    dots = (dots + 1) % 4;
    const statusElement = document.getElementById('status');
    const baseText = statusElement.textContent.replace(/\.+$/, '');
    statusElement.textContent = baseText + '.'.repeat(dots);
}, 500);
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be available at: `https://yourusername.github.io/gmod-loading-screen/`

## Step 4: Configure Your GMod Server

Add this to your `server.cfg`:
```
sv_loadingurl "https://yourusername.github.io/gmod-loading-screen/"
