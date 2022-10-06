import React from 'react'
import '../Dashboard/style.css'
import { FcGrid,FcBookmark,FcSettings,FcMenu } from "react-icons/fc";
import Add from '../Products/Add'

const Shopowner = () => {


  return (
    < div  className='container-shopowner'>
        <nav className='nav-shop'>
          <div className='select'>
          {/* <span ><FcGrid font-size="20px"/></span> */}
          <select name='product' id="select1">
            <option value="manage">Manage Products</option>
            <option value="add">Add product</option>
            <option value="import">Import product</option>
            <option value="images">manage Images</option>
          </select>
          </div>
         <div className='select'>
          {/* <span><FcBookmark font-size="20px"/></span> */}
         <select name='commande' id="select2">
            <option value="product">Manage commandes</option>
          </select>
         </div>
         <div className='select'>
         {/* <span><Settings font-size="20px"/></span> */}
         <select name='settings' id="select3">
            <option value="profil">your profil</option>
          </select>
         </div>
         <div className='select'>
         <select name="aide" id="select4">
         <option value="0">Help</option>
         <option value="documentation">Documentation api</option>
          </select>
         </div>
          <div className='select'>
          <select name='logout' id="select5" >
            <option value="notification">preference notification</option>
            <option value="change">change your password</option>
            <option value="logout">Logout</option>
            {/* <span><FcMenu font-size="20px"/></span> */}
          </select>
          
          </div>
        </nav>
        
       <Add/>
      
       
      </div>
  )
}

export default Shopowner