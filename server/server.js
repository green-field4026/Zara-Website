const express = require("express");
const cors = require("cors")
const path = require("path");
const dotenv = require("dotenv")
const bodyparser = require("body-parser");
const logger = require("morgan");
const products = require("./routes/products");
const db = require('../config/database'); 
const users = require("./routes/users");
var jwt = require('jsonwebtoken');
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())
app.set("TOKEN_SECRET", `${process.env.TOKEN_SECRET}`);
// console.log(app.get("TOKEN_SECRET"));
app.use(logger("dev"));
console.log("jdidi");
app.use(bodyparser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.json({ Welcome: "to node.js" });
});
app.use('/users', users);
app.use('/products', validateUser, products);
app.get('/favicon.ico', function(req, res) {
  res.sendStatus(204);
});
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('TOKEN_SECRET'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
}
app.use(function(req, res, next) {
  let err = new Error('Not Found');
     err.status = 404;
     next(err);
 });
 app.use(function(err, req, res, next) {
  console.log(err);
  
   if(err.status === 404)
    res.status(404).json({message: "Not found"});
   else 
     res.status(500).json({message: "Something looks wrong :( !!!"});
 });
 const server =  app.listen(1337, () => {
  console.log("node server Listening on port 1337");
});
server.timeout = 500000