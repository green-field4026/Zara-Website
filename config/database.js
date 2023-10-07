const Sequelize = require("sequelize")
const UserModel = require("../server/models/users")
const ProductModel = require("../server/models/products");
const ImageModel = require("../server/models/images");
const WishlistModel = require("../server/models/wishlist")
const CONFIG = require("./config");
// setup sequelize instance
const sequelize = new Sequelize(
  CONFIG.development.database,
  CONFIG.development.username,
  CONFIG.development.password,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// test the connection
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

// import models
const User = UserModel(sequelize)
const Product = ProductModel(sequelize);
const Image = ImageModel(sequelize);
const Wishlist= WishlistModel(sequelize)
// sync the database
// sequelize.sync({force:true}).then(() => console.log("Database & tables created!"));
Product.hasMany(Image)
Image.belongsTo(Product)
User.hasOne(Wishlist)
Wishlist.belongsTo(User)
User.hasMany(Product)
Product.belongsTo(User)
Product.hasMany(Wishlist)
Wishlist.belongsTo(Product)
module.exports = {
  User,
  Product,
  Image,
  Wishlist
};
