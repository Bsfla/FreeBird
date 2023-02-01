const express = require("express");
const { Comment, Post, Image, User, Hashtag } = require("../models");
const sequelize = require("sequelize");

const db = require("../models");
const { isLoggedIn } = require("./middleware");
const router = express.Router();

router.get("/:userId/followers", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
    });

    if (!user) return res.status(404).send("유저가 존재하지 않습니다");

    const where = {};

    const lastId = parseInt(req.query.lastId, 10);

    if (lastId) {
      where.id = { [Op.lt]: lastId };
    }

    const followers = await user.getFollowers({
      where,
      limit: 10,
      attributes: ["id", "nickname"],
      include: [
        {
          model: Image,
          as: "ProfileImage",
          attributes: ["src"],
        },
      ],
    });
    res.status(200).json(followers);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/:userId/followings", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
    });

    if (!user) return res.status(404).send("유저가 존재하지 않습니다");

    const where = {};

    const lastId = parseInt(req.query.lastId, 10);

    if (lastId) {
      where.id = { [Op.lt]: lastId };
    }

    const followers = await user.getFollowings({
      where,
      limit: 10,
      attributes: ["id", "nickname"],
      include: [
        {
          model: Image,
          as: "ProfileImage",
          attributes: ["src"],
        },
      ],
    });
    res.status(200).json(followers);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:userId/follower", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    if (!user) res.status(403).send("유저가 존재하지 않습니다");

    await user.removeFollowers(req.params.userId);
    res.status(200).send("팔로워 삭제 성공");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
