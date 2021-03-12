const path = require('path');
// Load dependencies
const express = require('express');

// Create express app
const app = express();

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));


// Use res.sendFile to send the 404.html page when the http status is 404
app.get("*",function(req, res) {
  res.status(404);
  res.sendFile(__dirname + "/public/404.html");
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});