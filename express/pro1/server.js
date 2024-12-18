const express = require('express')

const CustomerRouter = require('./routers/CustomerRouter')
const CategoryRouter = require('./routers/CategoryRouter')
const AdminRouter = require('./routers/AdminRouter')
const ContactRouter = require('./routers/ContactRouter')
const ProductRouter = require('./routers/ProductRouter')

const server = express()
const cors = require('cors')
const fileUpload = require('express-fileUpload')

server.use(express.static(__dirname))

server.use(express.json())
server.use(cors())
server.use(express.urlencoded())
server.use(fileUpload())

server.use("/customer",CustomerRouter)
server.use("/category",CategoryRouter)
server.use("/adminlogin",AdminRouter)
server.use("/contact",ContactRouter)
server.use("/product",ProductRouter)

server.listen(8090,()=>
{
    console.log("server running:http://localhost:8090/Customer")
});