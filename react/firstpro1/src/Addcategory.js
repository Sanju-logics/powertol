
import React from 'react'
import CategoryServices from './services/CategoryServices'

export default class Addcategory extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Category:[],
            msg:"",

            updatedata : {
                isedit : false,
                plans : undefined
            }
        }
    }
    add=(event)=>{
        var ob={
            //  cateid:this.cateidbox.value,
             title:this.title.value,
             description:this.descriptionbox.value
            
        }
        console.log(ob)

        if (this.state.updatedata.isedit)
        {
            ob.cateid = this.state.updatedata.category.cateid
        
        CategoryServices.updateCategory(ob)
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data)
            if(data.status)
            {
               // console.log(data)
                this.setState({
                    msg:"plan update!",
                    Category: this.state.Category.map(ob => ob.cateid == 
                    data.category.cateid ? data.category : ob)
                })
                this.closeEdit()
            }
            else{
                this.setState({msg:"plan already exit!"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }else{
        CategoryServices.saveCategory(ob)
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data)
            if(data.status)
            {
               // console.log(data)
                this.setState({
                    msg:"plan update!",
                    Category: this.state.Category.map(ob => ob.cateid == 
                    data.category.cateid ? data.category : ob)
                })
                this.closeEdit()
            }
            else{
                this.setState({msg:"plan already exit!"})
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
        CategoryServices.listCategory()
        .then(Response=>Response.json())
        .then(data=>{
            if(data.status){
                this.setState({Category:data.records})
            }
        });
    }

    delete = (id)=>
        {
            CategoryServices.deleteCategory(id)
            .then(Response=>Response.json())
            .then(data => { 
                if (data.status)
                {
                    this.setState({ Category: this.state.Category.filter(ob => ob.
                        cateid!= data.cateid)})
                }
            })
            alert("data is deleted")
        }
   editCategory = (category) => {
       this.title.value = category.title
       this.descriptionbox.value = category.description

       this.setState({ updatedata: { isedit: true,category: category }})
   }

   closeEdit = () => {
       this.title.value = ''
       this.descriptionbox.value = ''

       this.setState({ updatedata: { isedit: false,category: undefined}})
   }
    render()
    
    {
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
                       <h2><strong><b>Add-Category</b></strong></h2>
                       {/* <div class="form-group">
                          <input type="text" class="form-control form-control-sm"ref={c => this.cateid=c} placeholder="cateid" name="cateid"/>
                       </div> */}
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm" ref={c => this.title=c}placeholder="title" name="title"/>
                       </div>
                       <div class="form-group">
                          <input  type="text" class="form-control form-control-sm"ref={c => this.descriptionbox=c} placeholder="description" name="description"/>
                       </div>
                       
                       <fieldset>

                           {this.state.updatedata.isedit ? <> 
                          <button type="submit" id ="submit" class="btn">Update</button>
                          &nbsp;
                          <button class="btn" onClick={this.closeEdit} type='button'>Close</button>
                          </>  :
                          <button>Add</button>
                          }
                          <b className='text danger'>{this.state.msg}</b>
                       </fieldset>
                       
                     </form>
                 </div>
              </div>
           </div>
          
           
           </div>
   </div>
   <div >
   <h1 style={{backgroundImage:"url(images/bgb.webp)"}}><b><center>Category list</center></b></h1>
            <table border="10" className='table'>
                <thead>
                    <tr>
                        <th>cateid</th> 
                        <th>title</th> 
                        <th>description</th>
                        <th>Operations</th>
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
                            <td>
                                <button onClick={() => this.editCategory(cate)}>
                                    Edit</button>
                                &nbsp;
                                &nbsp;
                                
                                <button onClick={() => this.delete(cate.cateid)}>delete</button>
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