var DBConn = require ('./DBConnection')

class CustomerModel
{
    listCustomer(callback)
    {
        var connection = DBConn()
        connection.connect((err)=>{
                if(err)
                //  console.log(err)
                callback(false)
                
                else
                {
                  console.log("connection success...!")
                  connection.query("select * from customer",(err,records)=>
                  {
                     if (err)
                     {
                       console.log(err)
                     callback(false)
                     }
                     else
                     callback(true,records)
                });
            }          
        })
    }
    
    saveCustomer(data,callback)
    {
        var connection = DBConn()
        connection.connect((err)=>{
                if(err)
                
                 // console.log(err)
                callback(false)
                
                else
                {
                  console.log("connection success !")
                  connection.query("insert into customer(name,phone,email,password) value(?,?,?,?)",[data.name,data.phone,data.email,data.password],
                  (err)=>
                  {
                    if(err){
                      console.log(err)
                        callback(false)
                    }
                    else{ 
                    callback(true)
                    }
                  });
                  }
                })
                }
            
           
      
       loginCustomer(data,callback)
     {
         var connection=DBConn()
         connection.connect((err)=>{
          if(err)
           callback(false)
          else
           {
            console.log("connection success !")
            connection.query("select * from customer where email=? and password=?",[data.email,data.password],(err,records)=>
            {
              console.log(records)
              if(err || records.length==0)
                  callback(false)
              
              else{ 
               callback(true,records[0])
             }
           });
          }
       })
      }
    
    
  }module.exports = new CustomerModel()