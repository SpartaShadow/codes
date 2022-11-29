const express = require("express");
const bodyParser = require("body-parser");

const loginRoutes = require("./routes/loginRoute");
const messageRoutes = require("./routes/message");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(loginRoutes);
app.use(messageRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
