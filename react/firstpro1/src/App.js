import React from 'react'
import Menu from './Menu/Menu'
import Home from './WebComponents/Home'
import Gallery from './WebComponents/Gallery'
import Contact from './WebComponents/Contact'
import Registration from './WebComponents/Registration'
import Login from './WebComponents/Login'
import Category from './WebComponents/Category'
import Admin from './WebComponents/Admin'
import Addcategory from './Addcategory'
import Product from './WebComponents/Product'
import AddProduct from './AddProduct'





import { Route,Routes } from 'react-router-dom'

export default class App extends React.Component
{
  render()
  {
    return <div>
    <Menu/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/Registration" element={<Registration/>}/>
  <Route path="/gallery" element={<Gallery/>}/>
  <Route path="/login" element={<Login/>}/>
   <Route path="/category" element={<Category/>}/> 
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/Addcategory" element={<Addcategory/>}/>
  <Route path="/product" element={<Product/>}/>
  <Route path="/AddProduct" element={<AddProduct/>}/>
 
</Routes>
    
    
    </div>
  }
}