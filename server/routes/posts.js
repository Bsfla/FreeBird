const express = require("express");
const { Op } = require("sequelize");
const sequelize = require("sequelize");

const { Post, User, Comment, Image, Hashtag } = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
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
      UserId: { [Op.in]: [req.user.id, ...followingsId] },
    };
    const lastId = parseInt(req.query.lastId, 10);

    if (lastId) {
      where.id = { [Op.lt]: lastId };
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
          include: [
            {
              model: Image,
              as: "ProfileImage",
              attributes: ["src"],
            },
          ],
        },
        {
          model: Comment,
          attributes: ["id"],
        },
        {
          model: Image,
          attributes: ["src"],
        },
        {
          model: Hashtag,
          attributes: ["name"],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
              include: [
                {
                  model: Image,
                  as: "ProfileImage",
                  attributes: ["src"],
                },
              ],
            },

            {
              model: Image,
              attributes: ["src"],
            },
          ],
        },
        {
          model: Post,
          as: "Retweets",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
              attributes: ["src"],
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/:hashtag", async (req, res, next) => {
  try {
    const where = {};
    const lastId = parseInt(req.query.lastId, 10);

    if (lastId) {
      where.id = { [Op.lt]: lastId };
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
          include: [
            {
              model: Image,
              as: "ProfileImage",
              attributes: ["src"],
            },
          ],
        },
        {
          model: Image,
          attributes: ["src"],
        },
        {
          model: Hashtag,
          where: { name: req.params.hashtag },
          attributes: ["name"],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
              attributes: ["src"],
            },
          ],
        },
        {
          model: Post,
          as: "Retweets",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
              attributes: ["src"],
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
