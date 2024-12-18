class CategoryService{
   

    listCategory(data){
        return fetch("http://localhost:8090/category/list",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }
    saveCategory(data){
        return fetch("http://localhost:8090/category/save",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }
    updateCategory(data){
        return fetch("http://localhost:8090/category/update",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }

    deleteCategory(id){
        return fetch("http://localhost:8090/category/delete",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({id})
        })
    }
}



export default new CategoryService()