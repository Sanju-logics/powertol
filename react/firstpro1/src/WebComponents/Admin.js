
import React  from 'react'
import { Navigate } from 'react-router-dom'
import AdminServices from '../services/AdminServices'

import { ACTION_LOGIN } from '../reduxdata/actions/UserAction'
import Store from '../reduxdata/Store'



export default class Admin extends React.Component
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
            adminid : this.adminidbox.value,
           password : this.passwordbox.value,
         
        }  
        
        AdminServices.loginAdmin(ob)
        .then(response=>response.json())
        .then(data=>{
           console.log(data)
            if (data.status)
            {
             Store.dispatch({...ACTION_LOGIN,payload: {
                   userid: 1,
                   userName: 'Admin',
                   type:'admin'
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
      return<Navigate to="/Addcategory"/>
           else
           return<div style={{backgroundImage:"url(images/bga1.jpg)"}}>
        <div id="plant" class="section product"style={{backgroundImage:"url(images/bga1.jpg)"}}>
        <div class="container">
           <div class="row">
              <div class="col-md-12 ">
                 <div class="titlepage">
                   <h2><strong class="black"></strong>  </h2>
                   
                 </div>
              </div>
           </div>
        </div>
     </div>

     <div class="contact_us_2 layout_padding paddind_bottom_0" style={{backgroundImage:"url(images/bga1.jpg",height:"700px"}}>
     
        <div class="container">
           <div class="row">
              <div class="col-md-6">
                 {/* <div  class="soc_text">Tools</div> */}
              </div>
              <div class="col-md-6">
                 <div class="email_btn">
                    <form onSubmit={this.login} >
                       <h2><strong class="white">Admin login</strong></h2>
                      
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm"ref={c => this.adminidbox=c} placeholder="Email" name="Adminid"/>
                       </div>
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm"ref={c => this.passwordbox=c} placeholder="Password" name="Password"/>
                       </div>
                       <fieldset>
                          <button type="submit" id ="form-submit" class="button">submit</button>
                          &nbsp;
                          <b className='text danger'>{this.state.msg}</b>
                       </fieldset>
                       
                     </form>
                 </div>
              </div>
           </div>
          
           
           </div>
   </div>
</div> 
    
    }
}// import React  from 'react'
// import { Navigate } from 'react-router-dom'
// import AdminServices from '../services/AdminServices'

// import { ACTION_LOGIN } from '../reduxdata/actions/UserAction'
// import Store from '../reduxdata/Store'



// export default class Admin extends React.Component
// {
//     constructor(){
//         super()
//         this.state={
//             msg:'',
//             islogin: false
//         }
//     }

//     login = (event)=>
//     {
//         this.setState({msg:'sign In...'})

//         var ob = {
//             adminid : this.adminidbox.value,
//            password : this.passwordbox.value,
//         }  
//          AdminServices.loginAdmin(ob)
//         .then(response=>response.json())
//         .then(data=>{
//           // console.log(data)
//             if (data.status)
//             {
//              Store.dispatch({
//                    ...ACTION_LOGIN,payload: {
//                    adminid: data.records.adminid,
//                   // userName: data.records.name
//                 }
//              })
            
//             this.setState({islogin:true})
//          }
//             else
//             this.setState({msg:"Login failed...."})
//         })
//         .catch(err=>{
//         //  console.log(err)
//         })
      
        
//         event.preventDefault()
//     }
   
//     render()
//     {
//        if(this.state.islogin)
//       return<Navigate to="/Addcategory"/>
//            else
//            return<div>
//         <div id="plant" class="section product">
//         <div class="container">
//            <div class="row">
//               <div class="col-md-12 ">
//                  <div class="titlepage">
//                    <h2><strong class="black">Admin</strong>  Us</h2>
                   
//                  </div>
//               </div>
//            </div>
//         </div>
//      </div>

//      <div style={{backgroundImage:"url(images/bga1.jpg)"}}>
     
//         <div class="container">
//            <div class="row">
//               <div class="col-md-6">
//                  {/* <div class="soc_text">Tools</div> */}
//               </div>
//               <div class="col-md-6">
//                  <div class="email_btn">
//                     <form onSubmit={this.login} name="sentmessage" action="/action_page.php">
//                        <h2><strong>Admin login</strong></h2>
                      
//                        <div class="form-group">
//                           <input  type="text" class="form-control form-control-sm"ref={c => this.adminidbox=c} placeholder="Adminid" name="Adminid"/>
//                        </div>
//                        <div class="form-group">
//                           <input  type="text" class="form-control form-control-sm"ref={c => this.passwordbox=c} placeholder="Password" name="Password"/>
//                        </div>
//                        <fieldset>
//                           <button type="submit" id ="form-submit" class="button">Login</button>
//                           &nbsp;
//                           <b className='text danger'>{this.state.msg}</b>
//                        </fieldset>
                       
//                      </form>
//                  </div>
//               </div>
//            </div>
          
           
//            </div>
//    </div>
// </div> 
    
//     }
// }


