var DBConn = require ('./DBConnection')

class AdminModel
{
    listAdmin(callback)
    {
        var connection = DBConn()
        connection.connect((err)=>{
                if(err)
                // console.log(err)
                callback(false)
                
                else
                {
                  console.log("connection success...!")
                  connection.query("select * from adminlogin",(err,records)=>
                  {
                     if (err){console.log(err)
                    callback(false)
                }
                     
                       
                     else{
                     callback(true,records)
                     }
                });
            }          
        })
    }
       
  
    loginAdmin(data,callback)
  {
      var connection = DBConn()
      connection.connect((err)=>{
              if(err)
              
               // console.log(err)
              callback(false)
              
              else
              {
                console.log("connection success !")
                connection.query("select * from adminlogin where adminid=?and PASSWORD=?",[data.adminid,data.PASSWORD],
                (err)=>
                {
                 // console.log(records)
                  if(err)
                  callback(false)

                  else 
                  callback(true)
                });
                }
              })
              }
            }
  module.exports = new AdminModel()