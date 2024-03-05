const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: "", max: 255 },
  description: { type: String, default: "", max: 600 },
  image: { type: String, default: "", max: 255 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

//
module.exports = mongoose.model("Course", Course);
