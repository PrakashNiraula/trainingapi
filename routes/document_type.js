var express = require('express');
var router = express.Router();
var document_type_controller=require('../controller/document_typecontroller');

router.route('/')
.get(async (req,res,next)=>{
try{
    res.json(await document_type_controller.getalldocumnemttypes() );

}catch(err) {
    next(err);

}

})


module.exports=router;

