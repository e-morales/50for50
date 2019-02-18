const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mapsing", { useNewUrlParser: true });

module.exports = {
  User: require("./user"),
  Song: require("./song"),
  Playlist: require("./playlist")
};
