import React  from 'react'
import { Navigate } from 'react-router-dom'
import CustomerServices from '../services/CustomerServices'

import Store from '../reduxdata/Store'
import { ACTION_LOGIN } from '../reduxdata/actions/UserAction'




export default class Login extends React.Component
{
    constructor(){
        super()
        this.state={
            msg:'',
            islogin: false
        }
    }

    login = (event)=>
    {
        this.setState({msg:'sign In...'})

        var ob = {
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

         
        
         CustomerServices.loginCustomer(ob)
        .then(response=>response.json())
        .then(data=>{
           console.log(data)
            if (data.status)
            {
             Store.dispatch({
                   ...ACTION_LOGIN,payload: {
                   userid: data.records.customerid,
                   userName: data.records.name,
                  type:'customer'
                }
             })
            
            this.setState({islogin:true})
         }
            else
            this.setState({msg:"Login failed...."})
        })
        .catch(err=>{
           console.log(err)
        })
      
        
        event.preventDefault()
    }
     
    render()
    {
       if(this.state.islogin)
      return<Navigate to="/category"/>
           else
           return<section class="section contact-me" data-section="section4">
        <div id="plant" class="section product"style={{backgroundImage:"url(images/bgc.jpg)"}}>
        <div class="container">
           <div class="row">
              <div class="col-md-12 ">
                 <div class="titlepage">
                   <h2><strong class="black">Login</strong>  Us</h2>
                   
                 </div>
              </div>
           </div>
        </div>
     </div>

     <div class="contact_us_2 layout_padding paddind_bottom_0"style={{backgroundImage:"url(images/bgl.jpg)",height:"850px"}}>
     
        <div class="container">
           <div class="row">
              <div class="col-md-6">
                 {/* <div  class="soc_text">Tools</div> */}
              </div>
              <div class="col-md-6">
                 <div class="email_btn">
                    <form id="contact" onSubmit={this.login} name="sentmessage" action="/action_page.php">
                       <h2><strong class="white">Customer login</strong></h2>
                      
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm"ref={c => this.emailbox=c} placeholder="Email" name="Email"/>
                       </div>
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm"ref={c => this.passwordbox=c} placeholder="Password" name="Password"/>
                       </div>
                       <fieldset>
                          <button type="submit" id ="form-submit" class="button">Login</button>
                          &nbsp;
                          <b className='text danger'>{this.state.msg}</b>
                       </fieldset>
                       
                     </form>
                 </div>
              </div>
           </div>
          
           
           </div>
   </div>
</section> 
    
    }
}