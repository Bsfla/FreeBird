const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("bcrypt");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const exUser = User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디 입니다");
    }
    const hashPassword = await bcrypt.hash(req.body.password);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashPassword,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
