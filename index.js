const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");

const app = express();
app.use(helmet());
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

dotenv.config();
//routes
const AuthRoute = require("./routes/auth");
const Cumbigroup = require("./routes/cumbigroup");

const port = process.env.PORT || 4000;

//routes
app.use("/api/auth", AuthRoute);
app.use("/api/aef", Cumbigroup);

app.listen(port, () => console.log("servidor esta ligado"));
