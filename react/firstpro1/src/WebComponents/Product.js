import React from "react"
import ProductServices from "../services/ProductServices"
export default class Category extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Product:[]
        }
    }
    componentDidMount()
    {
       ProductServices.listProduct()
         .then(Response=>Response.json())
       .then(data=>{
        if(data.status){
        console.log(data)
        this.setState({Product:data.records})
         }
        })
    }
    
    render()
    {
        return<div  style={{marginTop:"200px",}}>

            <h1><strong>Product list</strong></h1>
            <table border="10" className='table'>
                <thead>
                    <tr>
                        <th>productid</th> 
                        <th>title</th> 
                        <th>images</th>
                        <th>price</th>
                        <th>category</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {this.state.Product.map((prod,index)=>
                    {
                        return<tr key={index}>
                           
                            <td>
                                {prod.productid}
                            </td>
                            <td>
                                {prod.title}
                            </td>
                            <td>
                                {prod.images}
                            </td>
                            <td>
                                {prod.price}
                            </td>
                            <td>
                                {prod.category}
                            </td>
                            
                        </tr>
                    }
                    )}
                </tbody>
            </table>
            </div>

        
    }
}



