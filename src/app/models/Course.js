const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, default: "", max: 255 },
    description: { type: String, default: "", max: 600 },
    image: { type: String, default: "", max: 255 },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

//
module.exports = mongoose.model("Course", Course);
