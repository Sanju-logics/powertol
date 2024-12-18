var DBConn = require ('./DBConnection')

class ProductModel
{
    listProduct(callback)
    {
        var connection = DBConn()
        connection.connect((err)=>{
                if(err)
                //  console.log(err)
                callback(false)
                
                else
                {
                  console.log("connection success...!")
                  connection.query("select * from product",(err,records)=>
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
    
    
    saveProduct(data,callback)
{
    var connection = DBConn()
    connection.connect((err)=>{
            if(err)
            
             // console.log(err)
            callback(false)
            
            else
            {
              console.log("connection success !")
              connection.query("insert into product(title,images,price,category) values(?,?,?,?)",[data.title,data.image,data.price,data.category],
              (err,result)=>
              {
                if(err){
                  console.log(err)
                    callback(false)
                }
                else
                { 
                  data.productid = result.insertId;
                callback(true,data)
                }
              });
              }
            })
            }  
           

            updateImages(data,callback)
            {
                var connection = DBConn()
                connection.connect((err)=>{
                        if(err)
                        
                         // console.log(err)
                        callback(false)
                        
                        else
                        {
                          console.log("connection success !")
                          connection.query("update product set title=?,price=?,category=?,filepath=? where productid=?",[data.title,data.price,data.category,data.images,data.productid],
                          (err)=>
                          {
                            if(err){
                              console.log(err)
                                callback(false)
                            }
                            else{ 
                            callback(true,data)
                            console.log("record update")
                            }
                          });
                          }
                        })
                        }  
          
                        




            updateProduct(data,callback)
            {
                var connection = DBConn()
                connection.connect((err)=>{
                        if(err)
                        
                         // console.log(err)
                        callback(false)
                        
                        else
                        {
                          console.log("connection success !")
                          connection.query("update product set title=?,price=?,category=? where productid=?",[data.title,data.price,data.category,data.productid],
                          (err)=>
                          {
                            if(err){
                              console.log(err)
                                callback(false)
                            }
                            else{ 
                            callback(true,data)
                            console.log("record update")
                            }
                          });
                          }
                        })
                        }  
          
                        

      

 deleteproduct(id,callback)
 {
     var connection = DBConn()
     connection.connect((err)=>{
             if(err)
             
              //  console.log(err)
             callback(false)
             
             else
             {
               console.log("connection success !")
               connection.query("delete from product where productid=?",id,
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
    


             SearchProduct(data,callback)
             {
                 var connection = DBConn()
                 connection.connect((err)=>{
                         if(err)
                         
                          // console.log(err)
                         callback(false)
                         
                         else
                         {
                           console.log("connection success !")
                           connection.query("select * from product where productid=?",[data.productid],
                           (err)=>
                           {
                             if(err){
                               console.log(err)
                                 callback(false)
                             }
                             else{ 
                             callback(true,data)
                             console.log("record search")
                             }
                           });
                           }
                         })
                         }  
  }module.exports = new ProductModel()