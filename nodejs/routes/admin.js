const express = require("express");

const router = express.Router();

router.get("/addProduct", (req, res, next) => {
  res.send(
    "<form action ='/admin/addProduct' method = 'POST'><label for = 'name'>NAME</label><input type = 'text' name = 'title' id = 'name'><br><label for = 'size'>SIZE</label><input type = 'text' name = 'size' id = 'size'><br><button type = 'submit'>ADD PRODUCT</button></form>"
  );
});

router.post("/addProduct", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
