const express = require("express");
const { Comment, Post, Image, User } = require("../models");
const db = require("../models");

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
