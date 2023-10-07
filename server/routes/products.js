const express = require('express');
const router = express.Router();
const {getAll,create,getById,updateById,deleteById,searchByCategory} = require('../controllers/products');
router.get('/getAll', getAll);
router.post('/add', create);
router.get("/filter/:category",searchByCategory)
router.get('/:productId', getById);
router.put('/:productId', updateById);
router.delete('/:productId', deleteById);
module.exports = router;