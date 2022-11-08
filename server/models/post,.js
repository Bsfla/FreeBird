module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      content: {},
    },
    {
      charset: "utf8mb4",
      collate: "utfmb4_general_ci", //이모티콘 저장
    }
  );
  Post.associate = (db) => {};
  return Post;
};
