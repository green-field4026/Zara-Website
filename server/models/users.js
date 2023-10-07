const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      state: {
        type: DataTypes.ENUM('Seller', 'Buyer'),
        allowNull: false,
        set(val) {
          this.setDataValue("state", val.trim());
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        trim: true,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: true,
        trim: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
      },
    },
    {
      timestamps: true,
    }
  );

  User.beforeCreate((user, options) => {
    user.password = bcrypt.hashSync(user.password, saltRounds);
  });

  return User;
};
