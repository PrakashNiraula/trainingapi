var express = require('express');
var router = express.Router();
var trainee_controller=require('../controller/traineecontroller');


router.route('/')
.get(async(req,res,next)=>{
try{
 res.json(await trainee_controller.getalltrainee());

}catch(err){
    next(err);
}
})



.post(async(req,res,next)=>{
  
    try{
        
        res.json(await trainee_controller.createtrainee(req.body.document_type,req.body.name,req.body.phone,req.body.traning_type,req.body.document_number,req.body.dob,req.body.address,req.body.fathers_name,req.body.voucher_id));

    }catch(err){
        next(err);
    }
    
})

module.exports=router;