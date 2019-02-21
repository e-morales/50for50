const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Database
const db = require("./models");
const Song = db.Song;
const User = db.User;

// Configures Body Parser to Receive Form-Data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// Sign in

app.post("/api/users", (req, res) => {
  let userEmail = req.body.email;
  console.log(userEmail);
  User.findOne({ email: userEmail }, (err, foundUser) => {
    if (err) return console.log(err);
    console.log(foundUser);
    if (foundUser) {
      res.send("user exists");
    } else {
      User.create(req.body, (err, newUser) => {
        if (err) return console.error(err);
        res.json(newUser);
      });
    }
  });
});

// Add Song to Personal Playlist
app.post("/api/users/:userId/songs/:songId", (req, res) => {
  let user = req.params.userId;
  let song = req.params.songId;
  User.findOne({ _id: user }, (err, foundUser) => {
    if (err) return res.send(err);
    console.log(foundUser);
    if (foundUser) {
      foundUser.songs.forEach(loopsong => {
        if (loopsong == song) {
          return res.send("song already in collection");
        }
      });
      foundUser.songs.push(song);
      User.findOneAndUpdate({ _id: user }, foundUser, { new: true })
        .populate("songs")
        .exec((err, updatedUser) => {
          res.json(updatedUser);
        });
    }
  });
});

/// Set up server listening
app.listen(process.env.PORT || 3000, () => console.log(`Server is listening.`));
