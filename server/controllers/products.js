const { Product } = require("../../config/database");
const { Op } = require("sequelize");
module.exports = {
  getById: async (req, res, next) => {
    try {
      const productInfo = await Product.findByPk(req.params.productId, {
        include: ["Images"],
      });
      res.json({
        status: "success",
        message: "Product found!!!",
        data: productInfo,
      });
    } catch (err) {
      next(err);
    }
  },
  searchByName: async (req, res, next) => {
    const task = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },
      include: ["Images"],
    });
    res.json(task);
  },
  searchByCategory: async (req, res, next) => {
    const task = await Product.findAll({
      where: {
        category: req.params.category,
      },
      include: ["Images"],
    });
    res.json(task);
  },
  getAll: async (req, res) => {
    try {
      const products = await Product.findAll({
        include: ["Images"],
      });
      res.json(products);
    } catch (err) {
      throw err;
    }
  },
  updateById: async (req, res, next) => {
    try {
      await Product.update(req.body, { where: { id: req.params.productId } });
      res.json({
        status: "success",
        message: "Product updated successfully!!!",
        data: null,
      });
    } catch (err) {
      next(err);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      await Product.destroy({ where: { id: req.params.productId } });
      res.json({
        status: "success",
        message: "Product deleted successfully!!!",
        data: null,
      });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      await Product.bulkCreate(req.body);
      res.json({
        status: "success",
        message: "Product added successfully!!!",
        data: null,
      });
    } catch (err) {
      throw err;
    }
  },
  createForSeller: async (req, res, next) => {
    try {
     var x= await Product.create(req.body);
      res.json(x.id);
    } catch (err) {
      throw err;
    }
  },
};
