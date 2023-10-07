const express = require("express");
const router = express.Router();
const {
  findAll,
  findOne,
  create,
  update,
  remove,
  createOneImg
} = require("../controllers/images");
router.get('/', findAll);
router.post('/add', create);
router.post('/addOneImg',createOneImg)
router.get("/:userId",findOne)
router.put("/userId",update)
router.delete("/:userId",remove)

module.exports = router;
