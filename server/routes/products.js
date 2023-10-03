const express = require('express');
const router = express.Router();
const {getAll,create,getById,updateById,deleteById} = require('../controllers/products');
router.get('/', getAll);
router.post('/', create);
router.get('/:productId', getById);
router.put('/:productId', updateById);
router.delete('/:productId', deleteById);
module.exports = router;