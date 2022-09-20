import axios from 'axios';
import React,{useState, useEffect} from 'react';
import Itemcard from '../../shop/Itemcard.jsx';
import Cart from '../../shop/Cart.jsx';
import IP from '../../api/ip.js';
import './style.css';






const Home = () => {
const [products, setProducts] = useState([])







useEffect(()=>{
  axios.get(`${IP}/product/`)
  .then( res => {
    console.log(res);
    setProducts(res.data)
  })
  .catch(err =>{
    console.log(err);
  })
},[])
  





  return (
    <div className='grid-container'>
      <div className='row'>
      {products.map((product,index) => {
        return (
          <Itemcard  image={product.image} title={product.title} 
          description={product.description}
           price={product.price} item={product} key={index} />
        )
      }

      
        
        )}
      </div>
      <div>
        <Cart />
      </div>
      
      {/* <div className='side-basket-container'>
        <div className='header-sidebar'>
           <h2>basket</h2>
        </div>
        <div className='body-sidebar'>
         <div className='cart-product'>
           <div className='cart-image'>
            <img src="" alt="" />
            <h5>title</h5>
           </div>
           <div>
            <button>+</button>
            <button>-</button>
           </div>

         </div>
        </div>
        <div className='footer-sidebar'>
          <h5>footer</h5>
        </div>

      </div> */}
    
    </div>
  )

    }
export default Home;