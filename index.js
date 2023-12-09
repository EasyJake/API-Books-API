// Require Express module
const express = require('express');

// Initialize the app variable
const app = express();

// Create the home page route
app.get('/', (req, res) => {
  res.send('hello world');
});

app.use(express.json())

// Call app.listen to keep server open on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
