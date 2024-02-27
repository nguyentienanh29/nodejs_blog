const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = 4000;

app.use(morgan("combined"));

//template egine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
//set lại thư mục
app.set("views", path.join(__dirname, "resources/views"));

//route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

//127.0.0.1 -> localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
