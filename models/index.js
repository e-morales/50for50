const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mapsing", {
  useNewUrlParser: true
});

module.exports = {
  User: require("./user"),
  Song: require("./song"),
  Playlist: require("./playlist")
};