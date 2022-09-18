import axios from 'axios';
import React,{useState, useEffect} from 'react';
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
      {
        products.map((product,i) => 
        <div className='card'  key={i}>
          <div>
          <img src={product.image} alt="" width={"100%"} height={"100%"} />
          </div>
          <h4 className='title'>{product.title}</h4>
          <div>
            <h6>{product.price} TND</h6>
          </div>
          <div>
            <button>Add</button>
          </div>
        </div>
        
        )}
      </div>
      
      <div className='side-basket-container'>
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

      </div>
    
    </div>
  )

    }
export default Home;