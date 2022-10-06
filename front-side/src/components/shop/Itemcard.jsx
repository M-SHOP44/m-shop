import React from 'react'
import {useCart} from "react-use-cart";
import "./cart.css"
const Itemcard = (props) => {
  props.product.id=props.product._id
  const {addItem} = useCart();


  return (
    <div className='card-container'>    
        <div className='card-row'>
            <img src={"http://localhost:3636/"+props.image[0]} alt="product" />
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <h5 className='card-title'>{props.price} TND</h5>
                <p className='card-text'>{props.description}</p>
                <button className='btn-success' onClick={() => addItem(props.product)}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Itemcard