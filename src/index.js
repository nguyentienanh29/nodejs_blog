const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = 4000;

const route = require("./routes"); // tự nạp file index.js

//Set Config Route Static Files
app.use(express.static(path.join(__dirname, "public")));

//đây là middleware xử lý dữ liệu gủi form
app.use(
  express.urlencoded({
    extended: true,
  })
);
//gửi từ code javascript
app.use(express.json());

//HTTP Logger
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

//route init
route(app);

//127.0.0.1 -> localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
