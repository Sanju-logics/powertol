
const express = require('express')

const CustomerModel=require("../Models/CustomerModel")

const Router = express.Router()


    Router.post("/save",(request,response)=>
    {

        console.log(request.body)
      CustomerModel.saveCustomer(request.body,(status)=>
      {
          response.json({status})
    })
})
Router.post("/login",(request,response)=>
{
     console.log(request.body)
     CustomerModel.loginCustomer(request.body,(status,records)=>
     {
         response.json({status,records})
      })
 })

     Router.post("/list",(request,response)=>
{
    
    CustomerModel.listCustomer((status,records)=>
    {
        response.json({status,records})
     
    })
})
   
      
        module.exports=Router

