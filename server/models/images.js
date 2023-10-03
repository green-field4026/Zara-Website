const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Image = sequelize.define(
    "Images",
    {
      image_Url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      altText: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
    }
  );
  return Image;
};
