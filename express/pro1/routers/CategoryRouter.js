
const express = require('express')

const CategoryModel=require("../Models/CategoryModel")

const Router = express.Router()


   

     Router.post("/list",(request,response)=>
{
    console.log(request.body)
    CategoryModel.listCategory((status,records)=>
    {
        response.json({status,records})
     
    })
})
   
      
    Router.post("/save",(request,response)=>
    {

        console.log(request.body)
      CategoryModel.saveCategory(request.body,(status)=>
      {
          response.json({status})
    })
})

Router.post("/update",(request,response)=>
{

    console.log(request.body)
  CategoryModel.updateCategory(request.body,(status)=>
  {
      response.json({status})
})
})

Router.post("/delete",(request,response)=>
{

    console.log(request.body.id)
  CategoryModel.deleteCategory(request.body.id,(status,cateid)=>
  {
      response.json({status,cateid})
})
})

        module.exports=Router