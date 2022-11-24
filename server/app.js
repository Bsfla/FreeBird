const express = require("express");
const cors = require("cors");
const db = require("./models");
const passportConfig = require("./passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const user = require("./routes/user");
const passport = require("passport");
const morgan = require("morgan");

const app = express();

dotenv.config();

db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공");
  })
  .catch(console.error);
passportConfig();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("poketbirdsecret"));
app.use(
  session({
    saveUnitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);

app.use(passport.initialize());
app.use(session());

app.use("/user", user);
app.listen(3065, () => {
  console.log("서버 실행 중!");
  console.log(process.env.PASSWORD);
});
