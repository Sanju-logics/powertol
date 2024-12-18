var DBConn = require ('./DBConnection')

class ContactModel
{
saveContact(data,callback)
    {
        var connection = DBConn()
        connection.connect((err)=>{
                if(err)
                
                 // console.log(err)
                callback(false)
                
                else
                {
                  console.log("connection success !")
                  connection.query("insert into contact(name,phone,email,message) value(?,?,?,?)",[data.name,data.phone,data.email,data.message],
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
                listContact(callback)
                {
                    var connection = DBConn()
                    connection.connect((err)=>{
                            if(err)
                            //  console.log(err)
                            callback(false)
                            
                            else
                            {
                              console.log("connection success...!")
                              connection.query("select * from contact",(err,records)=>
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
}
            module.exports = new ContactModel()       