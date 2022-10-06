import React from "react";
import { useCart } from "react-use-cart";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { FiMinus, FiPlus} from "react-icons/fi";

const Cart = (props) => {
  const navigate = useNavigate();
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const send = () => {
    console.log(send);

    navigate("/checkout");
    props.setProducts(items);
  };
  if (isEmpty)
    return (
      <div className="shopping">
        <div className="bag">
        <span class="material-symbols-outlined" id="bag">shopping_bag</span>
        <h1 id="text">Fill your basket</h1>
        </div>
       
      </div>
    );
  return (
    <section>
      <div className="container">
          <table>
            <tbody>
              {items.map((product, index) => {
                return (
                  <>
                    <div className="balise" key={index}>
                      <div className="title-price">

                       <h1>{product.quantity}</h1>
                       <h2>{product.title} </h2>
                       <h2>{product.price}TND</h2>

                      </div>
                      <div className="x">
                      <button id="circle"
                        onClick={() => removeItem(product.id)}
                      >
                        X
                      </button>
                      </div>
                      
                    </div>
                    <div className="button-cart">
                      <div>
                      <button
                       className="plus-minus"
                       onClick={() =>
                        updateItemQuantity(product.id, product.quantity + 1)}
                      >
                        <FiPlus/>
                      </button>
                      </div>
                     
                     
            
                      <div>
                      <button
                        className="plus-minus"
                        onClick={() =>
                          updateItemQuantity(product.id, product.quantity - 1)
                        }
                      >
                        <FiMinus/>
                      </button>
                      </div>
                      
                    </div>

                    <hr></hr>
                  </>
                );
              })}
            </tbody>
          </table>
      
        <div>
          <h2 className="price"> Total price: {cartTotal} TND</h2>
        </div>
        
        <div>
          <h3 className="delivery">*Delivery cost: 5 TND*</h3>
        </div>
        <div className="button-container">
          <button className="clear" onClick={() => emptyCart()}>
            clear cart
          </button>

          <button className="clear" onClick={send}>
            checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
