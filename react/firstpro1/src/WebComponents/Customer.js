import React from "react"

import CustomerServices from "../services/CustomerServices";
export default class Customer extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Customer:[]
        }
    }
    componentDidMount()
    {
        CustomerServices.listcustomer()
        .then(response=>response.json())
        .then(data=>{
            if(data.status){
               // console.log(data)
                this.setState({Customer:data.records})
            }
        });
    }
    render()
    {
        return<div>

            <h1>Customer list</h1>
            <table company='table'>
                <thead>
                    <tr>
                        <th>Customerid</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.Customer.map((cust,index)=>
                    {
                        return<tr key={index}>
                            <td>
                                {index+1}
                            </td>
                            <td>
                                {cust.Customerid}
                            </td>
                            <td>
                                {cust.name}
                            </td>
                            <td>
                                {cust.phone}
                            </td>
                            <td>
                                {cust.email}
                            </td>
                            <td>
                                {cust.password}
                            </td>
                        </tr>
                    }
                    )}
                </tbody>
            </table>
        </div>
    }
}