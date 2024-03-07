const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/courses", coursesRouter);
  // luôn để dưới cùng vì nếu để đầu thì nó sẽ luôn map
  app.use("/", siteRouter);

  //   app.post("/search", (req, res) => {
  //     //POST
  //     console.log(req.body.q);
  //     res.send("testPost");
  //   });
}

module.exports = route;
