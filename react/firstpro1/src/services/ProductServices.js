class ProductService{
   

    listProduct(data){
        return fetch("http://localhost:8090/product/list",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }

saveProduct(data){
    return fetch("http://localhost:8090/product/save",{
        method:"POST",
        body:data
    })
}
updateProduct(data){
    return fetch("http://localhost:8090/product/updateimages",{
        method:"POST",
       body : data
    })
}

delete(id){
    return fetch("http://localhost:8090/product/delete",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({id})
    })
}

}
 export default new ProductService()