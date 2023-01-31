
const conn=require('../db/config');
const bcryptjs = require('bcryptjs');

let db={};

//  controller to login user
db.userlogin=async(username,password)=>{
    console.log(username+password);
        
    return new Promise((resolve,reject)=>{
        
        conn.query("select * from user where username=? and password=?",[username,password],(error,res)=>{
            if(error){
                return reject(error);
            }
            console.log(res[0]);
            return resolve(res[0])
        })   
    })
}
module.exports=db;