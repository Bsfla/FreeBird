const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User, Post } = require("../models");
const db = require("../models");

const { isLoggedIn, isNotLoggedIn } = require("./middleware");

const router = express.Router();

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: {
          id: req.user.id,
        },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      res.status(200).json(user);
    } else res.status(200).json(null);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

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
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, async (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.status(200).send("로그아웃을 완료하였습니다.");
    });
  });
});

router.post("/", isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디 입니다");
    }

    const hashPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashPassword,
      intro: "",
    });
    res.status(201).send("ok");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.patch("/nickname", async (req, res, next) => {
  try {
    await User.update({
      where: {
        id: req.body.nickname,
      },
    });

    res.status(200).json({ nickname: req.body.nickname });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//팔로우하기
router.patch("/:userId/follow", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    if (!user) return res.status(403).send("사용자가 없습니다");

    await user.addFollowers(req.user.id);

    res.status(200).send("팔로우에 성공했습니다");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:userId/follow", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    if (!user) return res.status(403).send("사용자가 없습니다");

    await user.removeFollowers(req.user.id);

    res.status(200).json({ UserId: req.user.id });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/follower/:userId", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    if (!user) res.status(403).send("사용자가 없습니다");

    await user.removeFollowings(req.user.id);

    res.status(200).json({ UserId: req.user.id });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/followers", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(403).send("없는 사람을 찾으려고 하시네요?");
    }

    const followers = user.getFollowers();

    res.status(200).json(followers);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/followings", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(403).send("없는 사람을 찾으려고 하시네요?");
    }

    const followings = user.getFollowings();

    res.status(200).json(followings);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
