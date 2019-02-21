const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Database
const db = require("./models");
const Song = db.Song;
const User = db.User;

// Configures Body Parser to Receive Form-Data
app.use(bodyParser.urlencoded({ extended: true }));

// Serves static files from the Public Folder
app.use(express.static(__dirname + "/public"));

// ENDPOINTS HERE
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

/////////////
// API Routes
/////////////

////
// Songs
////

// Show all Songs
app.get("/api/songs", (req, res) => {
  Song.find({}, (err, songs) => {
    if (err) console.error("Error finding all songs");
    res.json(songs);
  });
});

// Route for Clicking on Song for State

app.get("/api/songs/:state", (req, res) => {
  Song.find({ state: req.params.state }, (err, songs) => {
    if (err) console.error("Error finding this song.");
    res.json(songs);
  });
});

//

////
// Users
////

// Show all Users
app.get("/api/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) console.error("Error finding all users");
    res.json(users);
  });
});

// Sign-in

app.get("/api/users/:name", (req, res) => {
  User.find({ name: req.params.name }, (err, users) => {
    if (err) console.error(err);
    res.json(users);
  });
});

/// Set up server listening
app.listen(process.env.PORT || 3000, () => console.log(`Server is listening.`));
