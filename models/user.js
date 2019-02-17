const mongoose = require("mongoose");
Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  password: String,
  songs: {
    type: Schema.Types.ObjectId,
    ref: "Song"
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
