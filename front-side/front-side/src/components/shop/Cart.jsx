import React from 'react';
import {useCart} from "react-use-cart";

const Cart = () => {
  const {isEmpty, totalUniqueItems,items,totalItems,cartTotal, updateItemQuantity, removeItem, emptyCard} = useCart();

  if (isEmpty) return <h1>Your Card is empty</h1>
  return (
    <section>
      <div className='container'>
        <div>
          <div>
            <h5>cart ({totalUniqueItems}) total Items: ({totalItems })</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart