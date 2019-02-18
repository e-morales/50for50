const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Configures Body Parser to Receive Form-Data
app.use(bodyParser.urlencoded({ extended: true }));

// Serves static files from the Public Folder
app.use(express.static(__dirname + "/public"));

// ENDPOINTS HERE
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// YOUTUBE REQUEST

/// Set up server listening
app.listen(process.env.PORT || 3000, () => console.log(`Server is listening.`));
