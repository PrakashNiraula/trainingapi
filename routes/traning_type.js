var express = require('express');
var router = express.Router();
var traning_typescontroller=require('../controller/traning_typecontroller'); 


router.route('/')
.get(async(req,res,next)=>{

    try{
        res.json(await traning_typescontroller.getalltraningtypes());
        
    }catch(err)
{
    next(err);
}

})



module.exports=router;