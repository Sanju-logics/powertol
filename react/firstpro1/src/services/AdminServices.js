
class AdminService
{
    saveAdmin(data){
        return fetch("http://localhost:8090/adminlogin/save",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }

    loginAdmin(data){
        return fetch("http://localhost:8090/adminlogin/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }

    listAdmin(){
        return fetch("http://localhost:8090/adminlogin/list",{
            method:"POST",
        })
    }
}

export default new AdminService()