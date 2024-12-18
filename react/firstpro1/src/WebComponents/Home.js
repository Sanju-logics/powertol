import React from "react";


export default class Home extends React.Component
{
    render()
    {
        return <>
         <div style={{backgroundImage:"url(images/bg2.jpg)",height:"850px"} } >
         <img src="images\slogo.png" alt="#" style={{height:"200px",width:"200px"}}/>        
         <h1 style={{fontSize:"40px",textAlign:"center"}}><i><strong>Best tools and machine item shop our</strong></i></h1>
                             

                             
         {/* <figure><marquee><img  height='600px' width='700px' src="images/ban2.jpg"/>
                              <img height='600px' width='700px' src="images/down2.jpg" />
                              
                              <img height='600px' width='700px' src="images/down1.jpg" /></marquee></figure> */}
                              &nbsp;&nbsp;&emsp;<p style={{fontSize:"40px",
                           margin:"10px",padding:"10px",lineHeight:"50px",textAlign:"center"
                           }}><b>A tool is usually more simple than a machine;<br/> it is generally used with the hand, whilst a <br/>machine is frequently moved by animal or steam power. </b></p>
        
       </div>
        </>
        
      
      

        
    }
}