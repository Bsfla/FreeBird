const express = require("express");
const multer = require("multer");
const path = require("path");
const { Comment, Post, Image, User } = require("../models");

const router = express.router();

router.post("/", async (req, res, next) => {
  try {
    const post = Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });

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

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      //제로초.Png
      const ext = path.extname(file.originalname); //확장자 추출
      const basename = path.basename(file.originalname, ext); //제로초
      done(null, basename + new Date().getTime() + ext); //제로초150252.Png
    },
    limits: { fileSize: 20 * 1824 * 1824 }, //20MB
  }),
});
