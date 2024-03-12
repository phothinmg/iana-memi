const express = require('express');
const path = require('path');

const app = express();

// Set the directory path from which to serve files
const publicDirectoryPath = path.join(__dirname, 'docs');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Start the server
app.listen(5544, () => {
  console.log('http://localhost:5544');
});