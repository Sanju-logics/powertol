


import React from 'react'
import ProductServices from './services/ProductServices'
import CategoryServices from './services/CategoryServices'
export default class AddProduct extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Product:[],
            Category:[],
            newFile:undefined,
            msg:"",

            updatedata : {
                isedit : false,
                image : undefined
            }
        }
    }
    handlefile=(event)=>{
        var file = event.target.files[0]
        this.setState({newFile: file})
    }
    add=(event)=>{
            const frmData = new FormData()
            
             frmData.append("title",this.title.value)
             frmData.append("images",this.state.newFile)
             frmData.append("price",this.pricebox.value)
             frmData.append("category",this.category.value)
            
        
        console.log(frmData)

        if (this.state.updatedata.isedit)
        {
            frmData.append("productid", this.state.updatedata.image.productid)
        
           var pro =  ProductServices.updateProduct(frmData)
           pro .then(Response=>Response.json())
           .then(data=>{
            console.log(data)
            if(data.status)
            {
               // console.log(data)
                    this.setState({
                    msg:"images update!",
                    Product: this.state.Product.map(ob => ob.productid == 
                    data.records.productid ? data.records : ob)
                })
                this.closeEdit()
            }
            else{
                this.setState({msg:"images already exit!"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }else{
        ProductServices.saveProduct(frmData).then(Response=>Response.json()).then(data=>{
            console.log(data)
            if(data.status)
            {
               // console.log(data)
                this.setState({ msg:"images update!", Product: [...this.state.Product,data.record] })
                this.closeEdit()
            }
            else{
                this.setState({msg:"images already exit!"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    
    }
        event.preventDefault()
    }
    componentDidMount()
    {
        ProductServices.listProduct().then(Response=>Response.json())
        .then(data=>{
            if(data.status){
                this.setState({Product:data.records})

                CategoryServices.listCategory()
                .then(Response=>Response.json())
                .then(data=>{
                    if(data.status){
                        this.setState({Category:data.records})
                    }
                });
            }
        });
    }

    delete = (id)=>
        {
            ProductServices.delete(id) .then(Response=>Response.json())
            .then(data => { 
                if (data.status)
                {
                    this.setState({ image: this.state.image.filter(ob => ob.
                        productid!= data.productid)})
                }
            })
            alert("image is deleted")
        }
   editImage= (image) => {
       this.title.value = image.title
       this.pricebox.value = image.price
       this.category.value = image.category

       this.setState({ updatedata: { isedit: true,image: image}})
   }

   closeEdit = () => {
       this.title.value = ''
       this.pricebox.value = ''
       this.categorybox.value = ''
       
       this.setState({ updatedata: { isedit: false,product: undefined}})
   }

    render()
    
    {
        console.log(this.state.Product)
        return<>
        <div id="plant" class="section product" style={{backgroundImage:"url(images/bgb.webp)"}}>
        <div class="container">

           <div class="row">
              <div class="col-md-12 ">
                 <div class="titlepage">
                   {/* <h2><strong class="black">Category save</strong>  Us</h2> */}
                   
                 </div>
              </div>
           </div>
        </div>
     </div>

     <div style={{backgroundImage:"url(images/bgb.webp)"}}>
        <div class="container">
           <div class="row">
              <div class="col-md-6">
                 {/* <div class="soc_text">Tools</div> */}
              </div>
              <div class="col-md-6">
                 <div class="email_btn">
                    <form onSubmit={this.add}>
                       <h2><strong><b>Add-Product</b></strong></h2>
                       {/* <div class="form-group">
                          <input type="text" class="form-control form-control-sm"ref={c => this.cateid=c} placeholder="cateid" name="cateid"/>
                       </div> */}
                       
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm" ref={c=>this.title=c}placeholder="title" />
                       </div>
                       <div class="form-group">
                          <input  type="file" class="form-control form-control-sm"onChange={this.handlefile} placeholder="images" />
                       </div>
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm"ref={c=>this.pricebox=c} placeholder="price" />
                       </div>
                       <div class="form-group">
                          <select class="form-control form-control-sm" ref={c=>this.category=c} required>
                          {this.state.Category.map((cate)=>
                            {
                                 return <option value={cate.cateid}>{cate.title}</option>   
                            })}
                          </select>
                       </div>
                       
                       <fieldset>

                          
                          <button type="submit" id ="submit" class="btn">Add</button>
                          
                          <b className='text danger'>{this.state.msg}</b>
                       </fieldset>
                       
                     </form>
                 </div>
              </div>
           </div>
          
           
           </div>
   </div>
   <div >
   <h1 style={{backgroundImage:"url(images/bgb.webp)"}}><b><center>Product list</center></b></h1>
            <table border="10" className='table'>
                <thead>
                    <tr>
                        <th>productid</th> 
                        <th>title</th> 
                        <th>images</th>
                        <th>price</th>
                        <th>category</th>
                        <th>Operations</th>
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

                               <img src={"http://localhost:8090/"+prod.images} type="image/jpg" width="200" height="200" controls/>
                            </td>
                            <td>
                                {prod.price}
                            </td>
                            <td>
                                {prod.category}
                            </td>
                            <td>
                                {/* <button type="submit"onClick={()=>this.editImage(prod)}>Edit</button>
                                &nbsp;
                                &nbsp; */}
                                
                                <button onClick={()=>this.delete(prod.productid)}>delete</button>
                            </td>
                            
                        </tr>
                    }
                    )}
                </tbody>
            </table>
            </div>
  </> 

    }
}


