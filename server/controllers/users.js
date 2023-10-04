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
            data: { user: userInfo, token },
          });
        }
      else
       {
        res.json({
          status: "error",
          message: "Invalid email/password!!!",
          data: "error"
        });
      }
    } catch (err) {
      next(err)
    }
  },
};
