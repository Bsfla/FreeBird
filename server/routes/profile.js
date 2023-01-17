const express = require("express");
const { Image, User, Post } = require("../models");
const { isLoggedIn } = require("./middleware");

const router = express.Router();

router.get("/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Image,
          as: "ProfileImage",
          attributes: ["src"],
        },
        {
          model: Post,
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

    if (!user) return res.status(403).send("유저가 존재하지 않습니다");
    return res.status(200).json(user);
  } catch {
    next(err);
  }
});

module.exports = router;
