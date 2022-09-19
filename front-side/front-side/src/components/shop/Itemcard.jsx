import React from 'react'
import {useCart} from "react-use-cart";

const Itemcard = (props) => {

    const {addItem} = useCart();


  return (
    <div className='card-container'>    
        <div className='card-row'>
            <img src={props.image} alt="" width={"100%"} />
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <h5 className='card-title'>{props.price}</h5>
                <p className='card-text'>{props.description}</p>
                <button className='btn btn-success' onClick={() => addItem(props.item)}>Add to cart</button>
            </div>

        </div>
    </div>
  )
}

export default Itemcard