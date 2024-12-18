class Customerservice
{
    saveCustomer(data){
        return fetch("http://localhost:8090/customer/save",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }

    loginCustomer(data){
        return fetch("http://localhost:8090/customer/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }

    listcustomer(){
        return fetch("http://localhost:8090/customer/login",{
            method:"POST",
        })
    }
}

export default new Customerservice()