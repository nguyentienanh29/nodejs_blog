const Course = require("../models/Course"); // export ra model
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

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
    newCourse.save().then(() => res.redirect("/"));
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

  //[GET] /courses/:id/edit
  edit(req, res, next) {
    //
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", { course: mongooseToObject(course) });
      })
      .catch((error) => next(error));
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch((error) => next(error));
  }

  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch((error) => next(error));
  }
}

module.exports = new CourseController();
