
const conn=require('../db/config');
const bcryptjs = require('bcryptjs');

let db={};

db.getalldocumnemttypes=async()=>{
        
    return new Promise((resolve,reject)=>{
        
        conn.query("select * from document_type",(error,res)=>{
            if(error){
                return reject(error);
            }
            return resolve(res)
        })
    
    
    })
}

module.exports=db;