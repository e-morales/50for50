const mongoose = require("mongoose");
Schema = mongoose.Schema;

const SongSchema = new Schema({
  artist: String,
  title: String,
  songId: String,
  duration: String
});

const Song = mongoose.model("Song", SongSchema);

module.exports = Song;
