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
        type: DataTypes.FLOAT,
        allowNull: false,
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
          values: ['gaming', 'computer','electronics','furniture','clothes','food','toys','Hygiene']
        }),
        allowNull: false,
        set(val) {
          this.setDataValue("category", val.trim());
        },
      },
      state: {
        type: DataTypes.ENUM({
          values:['in Stock','out Of Stock']
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
