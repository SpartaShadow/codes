const path = require("path");

exports.getInTouch = (req, res, next) => {
  res.render("ContactUs", {
    pageTitle: "Contact Us",
    path: "/contactUs",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
exports.redirecting = (req, res, next) => {
  res.redirect("/contactUs/success");
};

exports.success = (req, res, next) => {
  res.render("success", {
    pageTitle: "Contact Us",
    path: "/contactUs/success",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
