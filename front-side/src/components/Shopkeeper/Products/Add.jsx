import React,{useState, useRef} from 'react';
import "../Products/styleP.css";
import axios from 'axios';
import IP from "../../api/ip"
import {BsFillCameraFill} from 'react-icons/bs'
import Snackbar from "./snackbar";

const SnackbarType = {
  success: "success",
  fail: "fail",
};

const AddProduct = () => {
  const snackbarRef = useRef(null);

const [formData, setFormData] = useState({
  category:"",
  title:"",
  description:"",
  image:"",
  price:""
})


  const add = () =>{
    axios.post(`${IP}/product/create`,formData)
    .then((response) => {
      console.log(response.data);
    })
  }
  return (
    
    <div className="addproduct-container">
      <div className='header-addproduct'>
      <h2 id='add'>Add Product</h2>
      </div>

        <div className='form-product'>
         <div >
          <label >Category</label>
          <input id='inputt' type="text" placeholder='Canapé...' value={formData.category} onChange={event => {setFormData({...formData, category:event.target.value})}} required/>
         </div>
         <div >
          <label >Title</label>
          <input id='inputt' type="text" placeholder='Canapé convertible...' value={formData.title} onChange={event => {setFormData({...formData, title:event.target.value})}} required/>
         </div>
         <div >
          <label >description</label>
          <input type="text" placeholder='describe your product ...' value={formData.description} onChange={event => {setFormData({...formData, description:event.target.value})}} id='description' />
         </div>
         <div >
          <label >Price</label>
          <input id='inputt' type="number" placeholder='100' value={formData.price} onChange={event => {setFormData({...formData, price:event.target.value})}} required/>
         </div>
         <div>
          <button type='button' className='button-select'><BsFillCameraFill  id='camera'/>Choose your Image</button>
         </div>
         <div>
         <button type='button' className='button-37' onClick={() => {
          snackbarRef.current.show();
        }}
        >ADD
         </button>
         <Snackbar
        ref={snackbarRef}
        message="This is a success message!!"
        type={SnackbarType.success}
      />
         </div>
        </div>
     
    </div>
  )
}

export default AddProduct