
const conn=require('../db/config');
const bcryptjs = require('bcryptjs');


let db={};

//  controller to login user
db.getalltraningtypes=async()=>{      
    return new Promise((resolve,reject)=>{

        var query='SELECT * FROM `training_type`';
        console.log(query);
        
        conn.query(query,(error,res)=>{
            if(error){
                return reject(error);
            }
          
            return resolve(res)
        })   
    })
}
module.exports=db;