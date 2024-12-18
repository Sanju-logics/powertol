import React from 'react'
import ContactServices from '../services/ContactServices'
export default class Contact extends React.Component
{
   
      constructor()
      {
          super()
          this.state={
              msg:''
          }
         }
     save=(event)=>{
        event.preventDefault()
        var ob={
           name:this.namebox.value,
           email:this.emailbox.value,
           phone:this.phonebox.value,
           message:this.messagebox.value,
        }
        var pro=ContactServices.saveContact(ob)
        pro.then(response=>response.json())
        .then(data=>{
           console.log(data)
           if(data.status){
              this.setState({msg:"message send"})
           }
           else{
            
              this.setState({msg:"message not send!!"})
           }
        })
        .catch(err=>{
           console.log(err)
        })
     }    
    render()
    {
        return<> <div id="plant" class="section product"style={{backgroundImage:"url(images/bgc.jpg)"}}>
         <div class="container">
            <div class="row">
               <div class="col-md-12 ">
                  <div class="titlepage">
                    <h2><strong class="black"> Contact</strong>  Us</h2>
                    
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="contact_us_2 layout_padding paddind_bottom_0"style={{backgroundImage:"url(images/bg3.jpg)",height:"850px"}}>
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  {/* <div class="soc_text">Tools</div> */}
               </div>
               <div class="col-md-6">
                  <div class="email_btn">
                     <form onSubmit={this.save}>
                        <div class="form-group">
                           <input type="text"class="form-control form-control-sm" ref={c=>this.namebox=c}placeholder="Name" name="Name"/>
                        </div>
                        <div class="form-group">
                           <input  type="text"  class="form-control form-control-sm" ref={c=>this.emailbox=c} placeholder="Email" name="Email"/>
                        </div>
                        <div class="form-group">
                           <input  type="text"   class="form-control form-control-sm"ref={c=>this.phonebox=c} placeholder="Phone" name="Phone"/>
                        </div>
                        <div class="form-group">
                           <input  type="text"   class="form-control form-control-sm"ref={c=>this.messagebox=c} placeholder="Massage" name="text3"/>
                        </div>
                         <div class="submit_btn">
                            <button type="submit"  class="btn btn-primary" style={{background: "#081b30", color: "#fff", padding: "11px"}}>Send</button>
                         </div>
                      </form>
                  </div>
               </div>
            </div>
           
            
            </div>
    </div>
   </> 

        
    }
}