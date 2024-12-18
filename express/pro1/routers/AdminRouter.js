
const express = require('express')

const AdminModel=require("../Models/AdminModel")

const Router = express.Router()


//     Router.post("/save",(request,response)=>
//     {

//         console.log(request.body)
//       AdminModel.saveadmin(request.body,(status)=>
//       {
//           response.json({status})
//     })
// })
Router.post("/login",(request,response)=>
{
     //console.log(request.body)
     AdminModel. loginAdmin(request.body,(status)=>
     {
         response.json({status})
      })
 })

     Router.post("/list",(request,response)=>
{
    
    AdminModel.listAdmin((status,records)=>
    {
        response.json({status,records})
     
    })
})
Router.post("/save",(request,response)=>
{
    
    AdminModel.saveAdmin((status,records)=>
    {
        response.json({status,records})
     
    })
})
   
      
        module.exports=Router

