import React  from 'react'
import CustomerServices from '../services/CustomerServices'
export default class Registration extends React.Component
{
    constructor(){
        super()
        this.state={
            msg:''
        }
    }

    save = (event)=>{
        event.preventDefault()
        var ob = {

            name : this.namebox.value,
            phone : this.phonebox.value,
            email : this.emailbox.value,
           password : this.passwordbox.value,
            
        }
        var email = this.emailbox.value
         var atpos = email.indexOf("@");
         var dotpos = email.lastIndexOf(".");

         if (atpos < 1 || ( dotpos - atpos < 2 )){
             alert("Enter correct email ID")
             email.focus() ;
             return false;
         }

           var phoneno = /^\d{10}$/;

         var phoneno = this.phonebox.value;
         if(this.phonebox.value.match(phoneno))
         {
            var phone=this.phonebox.value;
            
         }
         
         {
            alert("Not Valid phone number please enter 10 digit")
            return false;
         }
        console.log(ob)
        var pro = CustomerServices.saveCustomer(ob)
        pro.then(response=>response.json())
        .then(data=>{
            if (data.status)
            this.setState({msg:"Registration done !"})
            else
            this.setState({msg:"Registration failed !"})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render()
    {
        return<>
        <div id="plant" class="section product"style={{backgroundImage:"url(images/bgr.jpg)"}}>
        <div class="container">
           <div class="row">
              
              <div class="col-md-12 ">
                 <div class="titlepage">
                   <h2><strong class="white">Registration</strong>  </h2>
                   
                 </div>
              </div>
           </div>
        </div>
     </div>

     <div class="contact_us_2 layout_padding paddind_bottom_0"style={{backgroundImage:"url(images/bgr.jpg)"}}>
        <div class="container">
           <div class="row">
              <div class="col-md-6">
                 {/* <div class="soc_text">Tools</div> */}
              </div>
              <div class="col-md-6">
                 <div class="email_btn">
                    <form onSubmit={this.save} name="sentmessage" action="/action_page.php">
                       <h2><strong>Customer Registration</strong></h2>
                       <div class="form-group">
                          <input type="text" class="form-control form-control-sm"ref={c => this.namebox=c} placeholder="Name" name="name"/>
                       </div>
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm" ref={c => this.phonebox=c}placeholder="Phone" name="phone"/>
                       </div>
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm"ref={c => this.emailbox=c} placeholder="Email" name="email"/>
                       </div>
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm"ref={c => this.passwordbox=c} placeholder="Password" name="password"/>
                       </div>
                       <fieldset>
                          <button type="submit" id ="form-submit" class="btn">Registration</button>
                          &nbsp;
                          <b className='text danger'>{this.state.msg}</b>
                       </fieldset>
                       
                     </form>
                 </div>
              </div>
           </div>
          
           
           </div>
   </div>
  </> 
    }
}