const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Wishlist = sequelize.define("Wishlist",{},
   {
    timestamps: true,
  });
  return Wishlist;
};
