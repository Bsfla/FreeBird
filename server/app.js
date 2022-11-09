const express = require("express");
const db = require("./models");
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공");
  })
  .catch(console.error);

app.listen(3065, () => {
  console.log("서버 실행 중!");
});
