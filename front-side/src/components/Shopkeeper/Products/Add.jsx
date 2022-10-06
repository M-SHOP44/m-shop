import React from 'react'
import "../Products/styleP.css"
const addProduct = () => {
  return (
    <div className="addproduct-container">
      <div className='header-addproduct'>
      <h3>Add Product</h3>
      </div>
      <main>
        <div className='form-product'>
         <div >
          <label >Category</label>
          <input type="text" placeholder='Canapé...' required/>
         </div>
         <div >
          <label >Title</label>
          <input type="text" placeholder='Canapé convertible...' required/>
         </div>
         <div >
          <label >description</label>
          <input type="text" placeholder='describe your product ...' id='description' />
         </div>
         <div >
          <label >Price</label>
          <input type="number" placeholder='100' required/>
         </div>
         <div >
          <button type='button' className='button-select'>choose your Image</button>
         </div>
         <div>
         <button type='button' className='button-37'>ADD</button>
         </div>
        </div>
      </main>
    </div>
  )
}

export default addProduct