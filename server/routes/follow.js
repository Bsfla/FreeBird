const express = require("express");
const { Comment, Post, Image, User, Hashtag } = require("../models");
const sequelize = require("sequelize");

const db = require("../models");
const { isLoggedIn } = require("./middleware");
const router = express.Router();

router.get("/:userId/follower", async (req, res, next) => {
  try {
    const where = {
      FollowingId: req.params.userId,
    };
    const lastId = parseInt(req.query.lastId, 10);

    if (lastId) {
      where.id = { [Op.lt]: lastId };
    }

    const followers = await db.sequelize.models.follow.findAll({
      where,
      limit: 10,

      include: [
        {
          model: User,
          as: "Followers",
          attribute: ["id"],
        },
      ],
    });
    res.status(200).json(followers);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
