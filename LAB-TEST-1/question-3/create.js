const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs'); // Define the Logs directory path
const numberOfLogFiles = 10;

// Create the Logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Change the current process to the Logs directory
process.chdir(logsDir);

// Create 10 log files and write some text into each file
for (let i = 0; i <= numberOfLogFiles; i++) {
  const logFileName = `log${i}.txt`;
  const logFilePath = path.join(logsDir, logFileName);
  const logContent = `This is log file ${i}.`;

  fs.writeFileSync(logFilePath, logContent);
  console.log(logFileName);
}

console.log('Log files created.');
