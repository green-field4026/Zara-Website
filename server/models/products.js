const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(val) {
          this.setDataValue("name", val.trim());
        },
      },
      stockNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:3,
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: false,
        set(val) {
          this.setDataValue("desc", val.trim());
        },
      },
      category: {
        type: DataTypes.ENUM({
          values: [
            "Woman's Fashion",
            "Man's Fashion",
            "Electronics",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
            "Phones",
            "Computer",
            "SmartWatch",
            "Camera",
            "Headphones",
            "Gaming",
          ],
        }),
        allowNull: false,
        set(val) {
          this.setDataValue("category", val.trim());
        },
      },
      state: {
        type: DataTypes.ENUM({
          values: ["in Stock", "out Of Stock"],
        }),
        allowNull: false,
        set(val) {
          this.setDataValue("state", val.trim());
        },
      },
    },
    {
      timestamps: true,
    }
  );

  return Product;
};
