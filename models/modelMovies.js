const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: {
    type: String,
  },
  director: {
    type: String,
  },
  image: {
    type: String,
  },
  duration: {
    type: Number,
  },
  year: {
    type: Number,
  },
});

module.exports = mongoose.model("Movie", moviesSchema);
