const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Database
const db = require("./models");
const Song = db.Song;
const User = db.User;
const PlayList = db.Playlist;

// Configures Body Parser to Receive Form-Data
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
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

// Route for Clicking on State for Song

app.get("/api/songs/:state", (req, res) => {
  Song.find(
    {
      state: req.params.state
    },
    (err, songs) => {
      if (err) console.error("Error finding this song.");
      res.json(songs);
    }
  );
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

app.get("/api/users/:userId", (req, res) => {
  User.findById(req.params.userId)
    .populate("songs")
    .exec((err, user) => {
      if (err) console.error(err);
      res.json(user);
    });
});

// Sign in

app.post("/api/users", (req, res) => {
  console.log(req.body);
  let userEmail = req.body.email;
  console.log(userEmail);
  User.findOne(
    {
      email: userEmail
    },
    (err, foundUser) => {
      if (err) return console.log(err);
      console.log(foundUser);
      if (foundUser) {
        // res.send(`user exists and ${foundUser.id}`);
        res.json(foundUser);
      } else {
        User.create(req.body, (err, newUser) => {
          if (err) return console.error(err);
          res.json(newUser);
        });
      }
    }
  );
});

// Add Song to Personal Playlist
app.post("/api/users/:userId/songs/:songId", (req, res) => {
  let user = req.params.userId;
  let songId = req.params.songId;
  let songFound;
  console.log(songId);
  User.findOne({ _id: user }, (err, foundUser) => {
    if (err) return res.send(err);

    if (foundUser) {
      // foundUser.songs.forEach(loopsong => {
      //   if (loopsong == song) {
      //     songFound= true;
      //     break;
      //   }
      // });

      songFound = foundUser.songs.filter(song => song == songId);
      console.log(songFound);
      if (songFound.length > 0) {
        res.send("song already in collection");
      } else {
        foundUser.songs.push(songId);
        User.findOneAndUpdate({ _id: user }, foundUser, { new: true })
          .populate("songs")
          .exec((err, updatedUser) => {
            if (err) console.error(err);
            res.json(updatedUser);
          });
      }
    }
  });
});

// Delete Song from Personal Songs
app.delete("/api/users/:userId/songs/:songId", (req, res) => {
  let user = req.params.userId;
  let song = req.params.songId;
  User.findOne(
    {
      _id: user
    },
    (err, foundUser) => {
      if (err) return res.send(err);
      console.log(foundUser);
      foundUser.songs.forEach(loopsong => {
        if (loopsong == song) {
          // res.send(`${loopsong} deleted`);
          foundUser.songs.splice(loopsong, 1);
        }
        foundUser.save((err, updatedUser) => {
          if (err) return console.error(err);
          res.json(updatedUser);
        });
      });
    }
  );
});

/// Set up server listening
app.listen(process.env.PORT || 3000, () => console.log(`Server is listening.`));
