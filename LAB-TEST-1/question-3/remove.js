const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs'); // Define the Logs directory path

// Check if the Logs directory exists
if (fs.existsSync(logsDir)) {
  // Read the files in the Logs directory
  const filesToDelete = fs.readdirSync(logsDir);

  // Output the file names to delete
  filesToDelete.forEach((file) => {
    console.log(`delete files... ${file}`);
    // Remove each file in the Logs directory
    fs.unlinkSync(path.join(logsDir, file));
  });

  // Remove the Logs directory
  fs.rmdirSync(logsDir);

  console.log('Logs directory removed.');
} else {
  console.log('Logs directory does not exist.');
}
