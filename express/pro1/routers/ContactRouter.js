
const express = require('express')

const ContactModel=require("../Models/ContactModel")

const Router = express.Router()


    Router.post("/save",(request,response)=>
    {

        console.log(request.body)
      ContactModel.saveContact(request.body,(status)=>
      {
          response.json({status})
    })
})
Router.post("/list",(request,response)=>
{
    
    ContactModel.listContact((status,records)=>
    {
        response.json({status,records})
     
    })
})
module.exports=Router