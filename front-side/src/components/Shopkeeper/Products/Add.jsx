import React,{useState} from 'react';
import "../Products/styleP.css";
import axios from 'axios';
import IP from "../../api/ip"

const AddProduct = () => {

const [formData, setFormData] = useState({
  category:"",
  title:"",
  description:"",
  image:"",
  price:""
})


  const add = () =>{
    const form=new FormData()
    Object.keys(formData).map((key)=>{
      form.append(key,formData[key])
    })
    axios.post(`${IP}/product/create`,form)
    
    .then((response) => {
      console.log(response.data);
    })
  }
  return (
    <div className="addproduct-container">
      <div className='header-addproduct'>
      <h3>Add Product</h3>
      </div>
      <main>
        <div className='form-product'>
         <div >
          <label >Category</label>
          <input type="text" placeholder='Canapé...' value={formData.category} onChange={event => {setFormData({...formData, category:event.target.value})}} required/>
         </div>
         <div >
          <label >Title</label>
          <input type="text" placeholder='Canapé convertible...' value={formData.title} onChange={event => {setFormData({...formData, title:event.target.value})}} required/>
         </div>
         <div >
          <label >description</label>
          <input type="text" placeholder='describe your product ...' value={formData.description} onChange={event => {setFormData({...formData, description:event.target.value})}} id='description' />
         </div>
         <div >
          <label >Price</label>
          <input type="number" placeholder='100' value={formData.price} onChange={event => {setFormData({...formData, price:event.target.value})}} required/>
         </div>
         <div >
          <input type='file'  onChange={event => {console.log(event.target.files[0]);
            setFormData({...formData, image:event.target.files[0]})}}/>
         </div>
         <div>
         <button type='button' className='button-37' onClick={add}>ADD</button>
         </div>
        </div>
      </main>
    </div>
  )
}

export default AddProduct