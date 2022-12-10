const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Comment, Post, Image, User } = require("../models");
const { isLoggedIn } = require("./middleware");

const router = express.router();

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
      //제로초.Png
      const ext = path.extname(file.originalname); //확장자 추출
      const basename = path.basename(file.originalname, ext); //제로초
      done(null, basename + "_" + new Date().getTime() + ext); //제로초150252.Png
    },
    limits: { fileSize: 20 * 1824 * 1824 }, //20MB
  }),
});

router.post("/", isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const post = Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });

    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        const images = Promise.all(
          req.body.image.map((image) => Image.create({ src: image }))
        );

        await post.addImages(images);
      }
    } else {
      const image = await Image.create({ src: req.body.image });
      await post.addImages(image);
    }

    const fullPost = Post.findOne({
      where: {
        id: post.id,
      },

      include: [
        {
          model: Image,
        },
        {
          model: User,
        },
        {
          model: Comment,
        },
      ],
    });

    res.status(201).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:postId", async (req, res, next) => {
  try {
    await Post.destory({
      where: { id: req.params.postId, UserId: req.user.id },
    });

    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/:postId/comment", async (req, res, next) => {
  try {
    const post = Post.findOne({
      where: {
        id: req.params.postId,
      },
    });

    if (!post) return res.status(403).send("존재하지 않는 게시물입니다");

    const comment = Comment.create({
      content: req.body.content,
      PostId: req.params.postId,
      UserId: req.user.id,
    });

    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.patch("/:postId/like", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });

    if (!post) {
      return res.status(403).send("게시물이 존재하지 않습니다");
    }

    await post.addLikers(req.user.id);

    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:postId/like", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });

    if (!post) {
      return res.status(403).send("게시물이 존재하지 않습니다");
    }

    await post.removeLikers(req.user.id);

    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/images", isLoggedIn, upload.array("image"), (req, res, next) => {
  // POST /post/images
  console.log(req.files);
  res.json(req.files.map((v) => v.location.replace(/\/original\//, "/thumb/")));
});
