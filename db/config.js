var mysql      = require('mysql');


const pool=mysql.createPool({

    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'trainee'
})


module.exports=pool;