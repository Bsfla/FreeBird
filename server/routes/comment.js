const express = require("express");
const { Comment, Post, Image, User, Hashtag } = require("../models");
const { isLoggedIn } = require("./middleware");

const router = express.Router();

router.post("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
      },
    });

    if (!post) return res.status(403).send("존재하지 않는 게시물입니다");

    await Comment.create({
      content: req.body.content,
      UserId: req.user.id,
      PostId: req.params.postId,
    });

    res.status(201).send("댓글을 생성했습니다");
  } catch (err) {
    next(err);
  }
});

router.get("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
      },
    });

    if (!post) return res.status(403).send("존재하지 않는 게시물입니다");

    const comments = await Comment.findAll({
      where: {
        PostId: req.params.postId,
      },
      attributes: ["id", "content", "createdAt"],
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });

    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
});

router.patch("/:commentId", async (req, res, next) => {
  try {
    await Comment.update(
      {
        content: req.body.content,
      },
      {
        where: {
          id: req.params.commentId,
          UserId: req.user.id,
        },
      }
    );

    res.status(200).send("댓글 수정에 성공했습니다");
  } catch (err) {
    next(err);
  }
});

router.delete("/:commentId", async (req, res, next) => {
  try {
    await Comment.delete({
      where: {
        id: req.params.commentId,
        UserId: req.user.id,
      },
    });

    res.status(200).send("댓글 삭제에 성공했습니다");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
