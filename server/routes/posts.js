const express = require("express");

const { Post, User, Comment } = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = Post.findAll({
      limit: 10,
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ],
      include: [
        {
          model: User,
          attributes: ["id", nickname],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
