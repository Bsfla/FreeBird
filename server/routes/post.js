const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Comment, Post, Image, User, Hashtag } = require("../models");
const { isLoggedIn } = require("./middleware");

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

router.post("/images", upload.array("image"), (req, res, next) => {
  res.json(req.files.map((v) => v.filename));
});

router.post("/", upload.none(), async (req, res, next) => {
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);

    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });

    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) =>
          Hashtag.findOrCreate({
            where: { name: tag.slice(1).toLowerCase() },
          })
        )
      );
      await post.addHashtags(result.map((el) => el[0]));
    }

    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        console.log("그랩");
        const images = await Promise.all(
          req.body.image.map((image) => Image.create({ src: image }))
        );
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }

    res
      .status(201)
      .json({ success: true, message: "게시글 생성에 성공했습니다" });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:postId", isLoggedIn, async (req, res, next) => {
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

router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
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

router.patch("/:postId/like", isLoggedIn, async (req, res, next) => {
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

router.delete("/:postId/like", isLoggedIn, async (req, res, next) => {
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

router.post("/:postId/Retweet", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [
        {
          model: Post,
          as: "Retweet",
        },
      ],
    });

    if (!post) return res.status(403).send("게시물이 존재하지 않습니다");

    if (req.user.id === post.UserId || post.Retweet?.UserId === req.user.id)
      return res.status(403).send("자신의 글은 공유할 수 없습니다");

    const retweetTargetId = post.RetweetId || post.id;

    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });

    if (exPost) return res.status(403).send("이미 공유했습니다");

    await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: "retweet",
    });

    return res.status(200).send("게시글을 공유했습니다");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
