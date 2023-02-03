
const conn=require('../db/config');
const bcryptjs = require('bcryptjs');

let db={};


db.getalltrainee=async()=>{
        
    return new Promise((resolve,reject)=>{
        
        conn.query("select t.id,d.doc_type, t.name,t.phone,tp.type,t.created_on from trainee t, document_type d, training_type tp where t.doc_type=d.id and t.traning_type=tp.id",(error,res)=>{
            if(error){
                return reject(error);
            }
            
            return resolve(res)
        })
    
    
    })
}


db.createtrainee=async(document_type,name,phone,traning_type,doc_no,dob,address,fathers_name,voucher_id,doc_image,profile_image)=>{
        
    return new Promise((resolve,reject)=>{
        
        conn.query("INSERT INTO `trainee` (`id`, `doc_type`, `name`, `phone`, `traning_type`, `doc_number`, `created_on`,`dob`,`address`,`fathers_name`,`voucher_id`,`doc_image`,`profile_image`) VALUES (NULL,?,?,?,?,?, CURRENT_TIMESTAMP,?,?,?,?,?,?);",[document_type,name,phone,traning_type,doc_no,dob,address,fathers_name,voucher_id,doc_image,profile_image],(error,res)=>{
            if(error){
                return reject(error);
            }
            return resolve(res)
        })
    
    
    })
}




module.exports=db;