import React from "react"
import CategoryServices from "../services/CategoryServices"
export default class Category extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Category:[]
        }
    }
    componentDidMount()
    {
       CategoryServices.listCategory()
         .then(Response=>Response.json())
       .then(data=>{
        if(data.status){
        console.log(data)
        this.setState({Category:data.records})
         }
        })
    }
    render()
    {
        return<div  style={{marginTop:"200px"}}>

            <h1><strong>Category list</strong></h1>
            <table border="10" className='table'>
                <thead>
                    <tr>
                        <th>cateid</th> 
                        <th>title</th> 
                        <th>description</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {this.state.Category.map((cate,index)=>
                    {
                        return<tr key={index}>
                           
                            <td>
                                {cate.cateid}
                            </td>
                            <td>
                                {cate.title}
                            </td>
                            <td>
                                {cate.description}
                            </td>
                            
                        </tr>
                    }
                    )}
                </tbody>
            </table>
            </div>

        
    }
}