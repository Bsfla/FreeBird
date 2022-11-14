const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User } = require("../models");
const db = require("../models");

const { isLoggedIn, isNotLoggedIn } = require("./middleware");

const router = express.Router();

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }

    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.log(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: db.Post,
          },
          {
            model: db.User,
            as: "Followings",
          },
          {
            model: db.User,
            as: "Followers",
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/", isNotLoggedIn, async (req, res, next) => {
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
