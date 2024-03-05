const mongoose = require("mongoose");
//viết hàm connect DB
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");

    console.log("Connect Successfully!!!");
  } catch (error) {
    console.log("Connect failure");
  }
}
module.exports = { connect };
