class ContactService{
   

       saveContact(data){
        return fetch("http://localhost:8090/contact/save",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }
}

export default new ContactService()