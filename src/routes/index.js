const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  // luôn để dưới cùng vì nếu để đầu thì nó sẽ luôn map
  app.use("/", siteRouter);

  //   app.post("/search", (req, res) => {
  //     //POST
  //     console.log(req.body.q);
  //     res.send("testPost");
  //   });
}

module.exports = route;
