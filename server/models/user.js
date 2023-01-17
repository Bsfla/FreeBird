module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(30), //STRING, TEXT , INTEGER, FLOAT, DATETIME
        allowNull: false, //필수 입력
        unique: true, // 고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      intro: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", //한글 저장
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.hasOne(db.Image, { as: "ProfileImage" });
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  }; //모델간의 관계
  return User;
};
