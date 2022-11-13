const express = require("express");
const cors = require("cors");
const db = require("./models");
const user = require("./routes");

const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공");
  })
  .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/user", user);
app.listen(3065, () => {
  console.log("서버 실행 중!");
});
