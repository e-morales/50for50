const mongoose = require("mongoose");
Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
  name: String,
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song"
    }
  ]
});

const Playlist = mongoose.model("Playlist", PlaylistSchema);

module.exports = Playlist;
