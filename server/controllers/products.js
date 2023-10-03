const {Product} = require('../../config/database');

module.exports = {
  getById: async (req, res, next) => {
    try {
      const productInfo = await Product.findByPk(req.params.productId);
      res.json({
        status: 'success',
        message: 'Product found!!!',
        data: { products: productInfo }
      });
    } catch (err) {
      next(err);
    }
  },
  searchByName: async (req,res,next)=>{
    const task = await Product.find({
      where:{
          name:{
              [Op.like] : `%${req.params.name}%`
          }
          
      }
  })
  res.json(task)
  },
  searchByCategory: async(req,res,next)=>{
    const task = await Product.find({
      where:{
        category:req.params.category
      }
    })
    res.json(task)
  },
  getAll: async (req, res, next) => {
    try {
      const products = await Product.findAll();
      // const productsList = products.map(product => ({
      //   id: product.id,
      //   name: product.name,
      //   released_on: product.released_on
      // }));
      res.json({
        status: 'success',
        message: 'Products list found!!!',
        data: { products: products }
      });
    } catch (err) {
      next(err);
    }
  },
  updateById: async (req, res, next) => {
    try {
      await Product.update({ name: req.body.name }, { where: { id: req.params.productId } });
      res.json({
        status: 'success',
        message: 'Product updated successfully!!!',
        data: null
      });
    } catch (err) {
      next(err);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      await Product.destroy({ where: { id: req.params.productId } });
      res.json({
        status: 'success',
        message: 'Product deleted successfully!!!',
        data: null
      });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      await Product.create(req.body);
      res.json({
        status: 'success',
        message: 'Product added successfully!!!',
        data: null
      });
    } catch (err) {
      next(err);
    }
  }
};
