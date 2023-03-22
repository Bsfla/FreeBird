const express = require("express");
const { Comment, Post, Image, User, Hashtag } = require("../models");
const { Op } = require("sequelize");
const db = require("../models");
const { isLoggedIn } = require("./middleware");
const router = express.Router();

router.get("/:userId/followers", async (req, res, next) => {
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
      where.id = { [Op.gt]: lastId };
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

router.get("/:userId/followings", async (req, res, next) => {
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

router.delete("/:userId/follower", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    if (!user) res.status(403).send("유저가 존재하지 않습니다");

    await user.removeFollowers(req.params.userId);
    res.status(200).json({ UserId: req.params.userId });
  } catch (err) {
    next(err);
  }
});

router.get("/unfollowing", async (req, res, next) => {
  try {
    const followings = await User.findAll({
      attributes: ["id"],
      include: [
        {
          model: User,
          as: "Followers",
          where: { id: req.user.id },
        },
      ],
    });

    const followingsId = followings.map((v) => v.dataValues.id);

    const where = {
      id: { [Op.notIn]: [req.user.id, ...followingsId] },
    };

    const unFollowings = await User.findAll({
      attributes: ["id", "nickname"],
      where,
      include: [
        {
          model: Image,
          as: "ProfileImage",
          attributes: ["src"],
        },
      ],
    });

    res.status(200).json(unFollowings);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
