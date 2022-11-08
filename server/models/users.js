module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {},
      nickname: {},
      password: {},
    },
    {
      charset: "utf8",
      collate: "utf_general_ci", //한글 저장
    }
  );
  User.associate = (db) => {};
  return User;
};
