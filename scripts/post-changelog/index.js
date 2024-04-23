const os = require('os');
const path = require('path');
const { exec, spawn } = require('child_process');

const FILE_EXTENSIONS = {
  win32: 'ps1',
  linux: 'sh',
  darwin: 'sh',
};

function getAbsolutePath(ext) {
  const WORKING_DIR = process.cwd();
  const FILE_DIR = `scripts/post-changelog/script.${ext}`;

  return path.join(WORKING_DIR, FILE_DIR);
}

function runScript(path, args) {
  let process;

  if (path.endsWith(FILE_EXTENSIONS['win32'])) {
    process = exec(`powershell -File ${path} ${args}`);
  } else {
    process = spawn('bash', [path, args]);
  }

  process.on('close', (code) => {
    console.log('Script executed with code:', code);
  });
}

(() => {
  const platform = os.platform();

  if (platform === 'win32') {
    const path = getAbsolutePath(FILE_EXTENSIONS[platform]);
    runScript(path);
  } else if (platform === 'linux' || platform === 'darwin') {
    const path = getAbsolutePath(FILE_EXTENSIONS[platform]);
    runScript(path, 'PT2');
  } else {
    console.log('Unsupported platform');
  }
})();
