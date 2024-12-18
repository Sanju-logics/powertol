var DBConn = require ('./DBConnection')

class CategoryModel
{
    listCategory(callback)
    {
        var connection = DBConn()
        connection.connect((err)=>{
                if(err)
                //  console.log(err)
                callback(false)
                
                else
                {
                  console.log("connection success...!")
                  connection.query("select * from category",(err,records)=>
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
    
saveCategory(data,callback)
{
    var connection = DBConn()
    connection.connect((err)=>{
            if(err)
            
             // console.log(err)
            callback(false)
            
            else
            {
              console.log("connection success !")
              connection.query("insert into category(title,description) value(?,?)",[data.title,data.description],
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




 updateCategory(data,callback)
            {
                var connection = DBConn()
                connection.connect((err)=>{
                        if(err)
                        
                         // console.log(err)
                        callback(false)
                        
                        else
                        {
                          console.log("connection success !")
                          connection.query("update category set title=?,description=? where cateid=?",[data.title,data.description,data.cateid],
                          (err)=>
                          {
                            if(err){
                              console.log(err)
                                callback(false)
                            }
                            else{ 
                            callback(true)
                            console.log("record update")
                            }
                          });
                          }
                        })
                        }  
          
                        

      

 deleteCategory(id,callback)
 {
     var connection = DBConn()
     connection.connect((err)=>{
             if(err)
             
              //  console.log(err)
             callback(false)
             
             else
             {
               console.log("connection success !")
               connection.query("delete from category where cateid=?",id,
               (err)=>
               {
                 if(err){
                   console.log(err)
                     callback(false)
                 }
                 else{ 
                 callback(true,id)
                 console.log("record delete")
                 }
               });
               }
             })
             }                   
    

  }module.exports = new CategoryModel()