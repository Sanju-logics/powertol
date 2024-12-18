




const express = require('express')
const path = require('path')
const ProductModel=require("../Models/ProductModel")

const Router = express.Router()


   

     Router.post("/list",(request,response)=>
{
    console.log(request.body)
    ProductModel.listProduct((status,records)=>
    {
        response.json({status,records})
     
    })
})

   
Router.post("/Search",(request,response)=>
{

    console.log(request.body)
  ProductModel.SearchProduct(request.body,(status,records)=>
  {
      response.json({status,records})
})
})

Router.post("/save",(request,response)=>
{

    console.log(request.body)
    console.log(request.files)
    var data = request.body
    var file = request.files.images
    const d = new Date()
    var dir = "upload/image/"+d.getMilliseconds()+path.extname(file.name)

    file.mv(dir)
    console.log(dir)
    data.image = dir
    ProductModel.saveProduct(data,(status,record)=>
    {
      response.json({status,record})
    })
})



Router.post("/updateimages",(request,response)=>
{

    var data= request.body
    var files = request.files
    console.log(data,files)
    if(files==null)
    {
                ProductModel.updateProduct(request.body,(status,records)=>
                {
                    response.json({status,records})
                })
    }
    else{
        var file = files.images
        const d= new Date();
        var dir = "upload/image"+ d.getMilliseconds()+ path.extname(file.name)
        file.mv(dir)
        data.image = dir
        ProductModel.updateImages(request.body,(status,records)=>{
            response.json({status,records}) 
        })
    }

})

Router.post("/delete",(request,response)=>
{

    console.log(request.body.id)
  ProductModel.deleteproduct(request.body.id,(status,productid)=>
  {
      response.json({status,productid})
})
})

module.exports = Router