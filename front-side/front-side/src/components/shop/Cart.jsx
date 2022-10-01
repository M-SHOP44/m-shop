import React from 'react';
import {useCart} from "react-use-cart"; 
import './cart.css'
import   empty from  "../../images/empty.svg";
import { useNavigate } from "react-router-dom";


const Cart = (props) => {
  const navigate = useNavigate();
  const {isEmpty,items,cartTotal, updateItemQuantity, removeItem, emptyCart} = useCart();

  const send = () =>{
    console.log(send);
     
     navigate("/checkout")
     props.setProducts(items)
  }
  if (isEmpty) return  <div className='fakecart'  > 
    <img className='emptyimg' src={empty} alt="" />
    <h1 >Your Card is empty</h1> 
    </div>
  return (
    <section>
      <div className='container'>
        
          <div className='shopping'>
            <table>
              <tbody>
              {items.map((product,index)=>{
                return(
                <>
                <div>
                <tr key={index}>
                    <td className='image'>
                      <img src={product.image} alt="" width={"95%"} style={{boxSizing: "border-box", borderRadius: "12px"}}/>
                    </td>
                    <td width={"60%"} style={{ color: "black", fontSize: "19px", padding: "0" }}>{product.title} </td>
                      <button style={{padding:"10px", backgroundColor:"white", color: "#383838", fontSize: '18px'}} onClick={() => removeItem(product.id)}>X</button>
                  </tr>
                  </div>
                  <tr>
                      <td style={{paddingLeft: "11rem", paddingBottom:"1rem"}}>
                        <button className='fa fa-plus-circle plus spaceplus' style={{color:"#383838"}} onClick={() => updateItemQuantity(product.id, product.quantity + 1)}></button>
                        {(product.quantity)}
                        <button className='fa fa-minus-circle minus space' style={{color:"#585858"}} onClick={() => updateItemQuantity(product.id, product.quantity - 1)}></button>
                      </td>
                    </tr>
                    <hr></hr>
                  </>
              )})

              }
              </tbody>
            </table>
          </div>
          <div>
            <h4 className='price'> Total price: {cartTotal} TND</h4>
          </div>
          {/* <hr></hr> */}
          <div>
            <h5 className='delivery'>*Delivery cost: 5 TND*</h5>
          </div>
          <div className='button-container'>
          <div >
            <button className='clear' onClick={() => emptyCart  ()}>
              clear cart
            </button>
          </div>
          <div>
            <button
            className='clear'
              onClick={send}
               >
              checkout
            </button>
          </div>
          </div>
        
        </div>
      
    </section>
  )
}

export default Cart