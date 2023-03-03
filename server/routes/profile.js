const express = require("express");
const { Image, User, Post, Hashtag } = require("../models");
const { isLoggedIn } = require("./middleware");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Op } = require("sequelize");

const router = express.Router();

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없으므로 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //확장자 추출
      const basename = path.basename(file.originalname, ext); //제로초
      done(null, basename + "_" + new Date().getTime() + ext); //제로초150252.Png
    },
    limits: { fileSize: 20 * 1824 * 1824 }, //20MB
  }),
});

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
          model: User,
          as: "Followings",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followers",
          attributes: ["id"],
        },
      ],
    });

    if (!user) return res.status(403).send("유저가 존재하지 않습니다");
    return res.status(200).json(user);
  } catch {
    next(err);
  }
});

router.patch("/:userId", upload.none(), isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
    });

    if (!user) return res.status(403).send("유저가 존재하지 않습니다");
    else if (req.params.userId != req.user.id) {
      return res.status(201).send("다른 사람의 정보를 수정할 수 없습니다");
    }

    await User.update(
      {
        nickname: req.body.nickname,
        intro: req.body.intro,
      },
      {
        where: {
          id: req.params.userId,
        },
      }
    );
    if (req.body.image) {
      const image = await Image.create({ src: req.body.image });
      await user.setProfileImage(image);
    } else await user.setProfileImage(null);

    res.status(200).send("프로필 수정에 성공했습니다");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/posts/:userId", async (req, res, next) => {
  try {
    const where = {
      UserId: req.params.userId,
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

module.exports = router;
