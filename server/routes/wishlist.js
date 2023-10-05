const {getAll,getOne,create,deleteProduct,deleteUser} = require("../controllers/wishlist")
const express = require("express")
const router = express.Router()
router.get("/getAll",getAll)
router.get("/:id",getOne)
router.post("/",create)
router.delete("/product/:ProductId/:UserId",deleteProduct)
router.delete("/user/:UserId",deleteUser)
module.exports=router