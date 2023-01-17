module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //이모티콘 저장
    }
    //Retweet
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); //post.addUser post.getUser
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
    db.Post.hasMany(db.Comment);
    db.Post.belongsTo(db.Post, { as: "Retweet" });
    db.Post.hasMany(db.Post, { as: "Retweets", foreignKey: "RetweetsId" });
    db.Post.hasMany(db.Image);
  };
  return Post;
};
