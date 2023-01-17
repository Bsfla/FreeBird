const express = require("express");
const cors = require("cors");
const db = require("./models");
const passportConfig = require("./passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const user = require("./routes/user");
const post = require("./routes/post");
const hashtags = require("./routes/hashtags");
const posts = require("./routes/posts");
const comment = require("./routes/comment");
const profile = require("./routes/profile");
const passport = require("passport");
const morgan = require("morgan");
const path = require("path");

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
app.use("/", express.static(path.join(__dirname, "uploads")));
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
app.use(passport.session());

app.use("/user", user);
app.use("/post", post);
app.use("/posts", posts);
app.use("/hashtags", hashtags);
app.use("/comment", comment);
app.use("/profile", profile);

app.listen(3065, () => {
  console.log("서버 실행 중!");
});
