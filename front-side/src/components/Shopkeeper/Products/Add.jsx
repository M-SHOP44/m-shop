import React,{useState} from 'react';
import "../Products/styleP.css";
import axios from 'axios';
import IP from "../../api/ip"
import Snackbar from '@mui/material/Snackbar';

// import Snackbar from "./snackbar";

// const SnackbarType = {
//   success: "success",
//   fail: "fail",
// };



const AddProduct = () => {
  // const snackbarRef = useRef(null);

const [formData, setFormData] = useState({
  category:"",
  title:"",
  description:"",
  image:"",
  price:""
})
const [open, setOpen] = React.useState(false);



const add = () =>{
  const form=new FormData()
  Object.keys(formData).map((key)=>{
    form.append(key,formData[key])
  })
  axios.post(`${IP}/product/create`,form)
  .then((response) => {
    console.log(response.data);
    setOpen(true)
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
          <input type='file' id='camera'  onChange={event => {setFormData({...formData, image:event.target.files[0]})}} required />
         </div>
         <div>
         <button type='button' className='button-37' onClick={add}
        >ADD
         </button>
         {/* <Snackbar
        ref={snackbarRef}
        message="This is a success message!!"
        type={SnackbarType.success}
      /> */}
         </div>
         {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Product added !"
      /> */}
        </div>
     
    </div>
  )
}

export default AddProduct;


// onClick={() => {
//   snackbarRef.current.show();
// }}