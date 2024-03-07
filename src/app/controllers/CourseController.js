const Course = require("../models/Course"); // export ra model
const { multipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.img}/sddefault.jpg`;
    const newCourse = new Course(formData);
    newCourse.save().then(() => res.redirect("/admin"));
  }

  //[GET] /courses/:slug
  async show(req, res, next) {
    //đang truyền dưới dạng params hỗ trợ bởi ExpressJS
    //nhận trên đường dẫn route/:slug thì name củng sẽ là slug
    //res.send("COURSE DETAIL - " + req.params.slug);

    await Course.findOne({ slug: req.params.slug })
      .then((courses) => {
        res.render("courses/show");
      })
      .catch((error) => next(error));
  }
}

module.exports = new CourseController();
