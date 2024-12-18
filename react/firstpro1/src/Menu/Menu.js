
import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect} from 'react-redux'
import { ACTION_LOGOUT } from '../reduxdata/actions/UserAction'
import Store from '../reduxdata/Store'
import Admin from '../WebComponents/Admin'
var mapStateToProps =(state)=>
{
  return{
    loginstatus : state.loginstatus,
    userName : state.userName,
    type : state.type
  }
}
 class Menu  extends React.Component 
 {  
    constructor(){
       super()
       this.state = {
          islogout : false
       }
    }
   logout=()=>
   {
     Store.dispatch({
         ...ACTION_LOGOUT
     })
   }



  render(){
     if(this.state.islogout)
     return<Navigate to="/"/>
     else
   return<div>
<header class="section" >
         <div class="header">
            <div class="container">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo"> <a href="index.html"></a> </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <div class="menu-area">
                        <div class="limit-box">
                        { this.props.loginstatus?this.props.userName:""}
                           <nav class="main-menu">

                           {this.props.loginstatus? <ul class="menu-area-main">
                               <li><Link to="/">Home</Link></li>    
                               <li><Link to="/product">product</Link></li>  
                               <li><Link to="/category">category</Link></li> 
                              {/* <li><Link to="/AddProduct">AddProduct</Link></li>  */}
                               {this.props.type=='admin'?<>
                              
                               <li><Link to="/AddProduct">AddProduct</Link></li> 
                               <li><Link to="/Addcategory">Addcategory</Link></li>
                             
                               
                              </>:""}
                               <li><Link to="/" onClick={this.logout} class="nav-link">logout</Link></li>
                               </ul>
                              
                               :
                           <ul class="menu-area-main">
                               <li><Link to="/">Home</Link></li>      
                               <li><Link to="/gallery">Gallery</Link></li>    
                               <li><Link to="/contact">Contact Us</Link></li>      
                               <li> <Link to="/registration">Registration</Link> </li>
                               <li> <Link to="/login">Login</Link> </li>  
                               <li><Link to="/Admin">Admin</Link></li>
                               {/* <li><Link to="/Addcategory">Addcategory</Link></li> */}
                               {/* <li><Link to="/CustomerOrder">/CustomerOrder</Link></li> */} 
                              </ul>}
                        </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
      </header>  
       </div>
   

  
  
        
         
  }
}
 export default connect(mapStateToProps)(Menu)