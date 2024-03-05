const Course = require("../models/Course"); // export ra model
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  //[GET] /
  async home(req, res, next) {
    // try {
    //   const courses = await Course.find({});
    //   res.json(courses);
    // } catch (error) {
    //   next(err);
    // }
    //viết theo promises
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch((error) => next(error));

    // res.json({ name: "test" });
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
