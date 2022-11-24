const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/addProduct", (req, res, next) => {
  res.send(
    "<form action ='/product' method = 'POST'><label for = 'name'>NAME</label><input type = 'text' name = 'title' id = 'name'><br><label for = 'size'>SIZE</label><input type = 'text' name = 'size' id = 'size'><br><button type = 'submit'>ADD PRODUCT</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>hello from express!</h1>");
});

app.listen(4000);
