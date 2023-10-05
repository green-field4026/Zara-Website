const { Wishlist } = require("../../config/database");
module.exports = {
  getAll: async (req, res) => {
    try {
      const task = await Wishlist.findAll();
      res.json(task);
    } catch (e) {
      throw e;
    }
  },
  getOne: async (req, res) => {
    try {
      const task = await Wishlist.findAll({
        where: {
          UserId: req.params.id,
        },
      });
      res.json(task)
    } catch (e) {
      throw e;
    }
  },
  create:async(req,res)=>{
    try {
        const task = await Wishlist.create(req.body)
        res.json(task)
    } catch (e) {
        throw e
    }
  },
  deleteProduct:async(req,res)=>{
    try {
        const task = await Wishlist.destroy({
            where:{
                UserId:req.params.UserId,
                ProductId:req.params.ProductId
            }
        })
        res.json(task)
    } catch (e) {
        throw e
    }
  },
  deleteUser:async(req,res)=>{
    try {
        const task = await Wishlist.destroy({
            where:{
                UserId:req.params.UserId
            }
        })
    } catch (e) {
        throw e
    }
  }
};
