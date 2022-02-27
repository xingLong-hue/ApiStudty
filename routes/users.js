var express = require('express');
var router = express.Router();
var User=require('../controllers/userController.js')

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/sendCode',User.sendCode);
router.post('/login',User.CodePhoneLogin);
module.exports = router;
