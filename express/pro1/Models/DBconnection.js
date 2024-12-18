const mysql =require('mysql')

function getconnnection()
{
    let connection =mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"",
    database:'powertols',
    port:'3306'
    });
    return connection;
}
module.exports =getconnnection