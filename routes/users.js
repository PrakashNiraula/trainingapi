var express = require('express');
var router = express.Router();
var usercontroller=require('../controller/usercontroller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/login')
.post(async (req,res,next)=>{
  console.log("here at login");
try{
  res.json( await usercontroller.userlogin(req.body.username,req.body.pass));
}catch(err){
  next(err);
}
}
);
module.exports = router;
