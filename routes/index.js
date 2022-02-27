var express = require('express');
var router = express.Router();
// var dbConfig=require('../util/dbconfig.js')
var cate=require("../controllers/categoryControlle.js")
// var User=require('../controllers/userController.js')
/* GET home page. */
router.get('/', cate.getCate);
router.get('/getCatelist', cate.getPostCate);
// router.get('/sendCode',User.sendCode);
module.exports = router;
