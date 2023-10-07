const { User } = require("../../config/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
module.exports = {
  create: async (req, res, next) => {
    try {
      const userInfo = await User.create(req.body);
      res.json({
        status: "success",
        message: "User added successfully!!!",
        data: userInfo,
      });
    } catch (err) {
      next(err);
    }
  },
  authenticate: async (req, res, next) => {
    try {
      const userInfo = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      const userInfo2 = await User.findAll({
        where: {
          id: userInfo.id,
        },
        include: ["Wishlist"],
        attributes: [],
      });
      const userInfo3 = await userInfo2.map((obj) => obj.Wishlist);
      if (bcrypt.compareSync(req.body.password, userInfo.password)) {
        const token = jwt.sign(
          { id: userInfo.id },
          req.app.get("TOKEN_SECRET"),
          {
            expiresIn: "24h",
          }
        );
        res.json({
          status: "success",
          message: "user found!!!",
          data: { user: userInfo, products: userInfo3, token },
        });
      } else {
        res.json({
          status: "error",
          message: "Invalid email/password!!!",
          data: "error",
        });
      }
    } catch (err) {
      next(err);
    }
  },
  checkpassword:async (req,res,next)=>{
try {
  const userInfo = await User.findOne({
    where: {
      email: req.body.email,
    }})
    if (bcrypt.compareSync(req.body.currentPassword, userInfo.password)) {
    User.update({name:req.body.name,lastName:req.body.lastName,email:req.body.email,adress:req.body.adress,
     password:bcrypt.hashSync(req.body.newPassword)},{where:{id:userInfo.id}})
   
    res.json({
      status: "success",
      message: "user found!!!",
      data: { user: userInfo},
    }); }
} catch (error) {
  next(err);
}

  }
};
