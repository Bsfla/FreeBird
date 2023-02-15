const express = require("express");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const { Hashtag } = require("../models");

const db = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const hashtags = await db.sequelize.models.PostHashtag.findAll({
      group: "HashtagId",
      order: [[sequelize.fn("COUNT", sequelize.col("PostId")), "DESC"]],
      attributes: ["HashtagId"],
      [Op.lt]: 3,
      include: [
        {
          model: Hashtag,
        },
      ],
    });

    res.status(200).json(hashtags);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
