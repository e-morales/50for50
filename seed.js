const db = require("./models");

// songList Test
let songList = [
  {
    artist: "Jon John",
    title: "Jon was here",
    songId: "44444",
    duration: "44:22"
  },
  {
    artist: "Dave David",
    title: "Dave was not here",
    songId: "33333",
    duration: "44:22"
  }
];

let fakeUser = {
  name: "James Bond",
  password: "Goldeneye"
};

// stores the songs
db.Song.deleteMany({}, (err, songs) => {
  if (err) console.error(err);
  console.log(`Deleted all songs.`);
  db.Song.create(songList, (err, newSongs) => {
    if (err) console.error(err);
    console.log(newSongs);
  });
});

// Create User and associate with songs?

db.User.deleteMany({}, (err, newUser) => {
  if (err) console.error(err);
  console.log("Deleted Users");
  db.User.create(fakeUser, (err, newUser) => {
    if (err) console.error(err);
    console.log(newUser);
  });
});
