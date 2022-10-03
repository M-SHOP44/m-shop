import axios from "axios";
import React, { useState, useEffect } from "react";
import Itemcard from "../../shop/Itemcard.jsx";
import Cart from "../../shop/Cart.jsx";
import IP from "../../api/ip.js";
import "./style.css";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false)

  useEffect(() => {
    axios
      .get(`${IP}/product/`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home-container">
      <button onClick={()=>{setShow(!show)}}>hide</button>
      <div>
        <Header />
      </div>
      <div className="grid-container">
        <div className="row">
          {products.map((product, index) => {
            return (
              <Itemcard
                image={product.image}
                title={product.title}
                price={product.price}
                product={product}
                key={index}
              />
            );
          })}
        </div>
        {
          show ? 
           <div>
          <Cart />
        </div> : null
        }
       
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;

// import React,{useEffect, useState} from 'react';
// import '../home/style.css';
// import Itemcard from '../../shop/Itemcard';
// import IP from "../../api/ip"
// import axios from 'axios';
// import Cart from '../../shop/Cart';
// const Home = () => {

//     const [show, setShow] = useState(false)
//     const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${IP}/product/`)
//       .then((res) => {
//         console.log(res);
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className='container-home'>
//       <nav className='nav1'>
//         <h2>M-shop</h2>
//         <div className='register'>
//           <button>Sign up</button>
//           <button>Log in</button>
//         </div>
//       </nav>
//       <nav className='nav2'>
//         <div className='category'>
//          <a href="/#">canapé</a>
//           <a href="/#">Chair</a>
//           <a href="/#">Table</a>
//           <a href="/#">Bureau</a>
//           <a href="/#">Rangement</a>
//           <a href="/#">Luminaire</a>
//           <a href="/#">Tapis</a>
//           <a href="/#">Lit</a>
//         </div>
//         <div className='shopping-cart'>
//            <span className="material-symbols-outlined" onClick={()=> setShow(true)}>shopping_cart</span>

//         </div>
//       </nav>
//       {/* END OF HEADER */}
//       <div className='main'>
//         <div className="product-container">
//            <div className="product">
//            {products.map((product, index) => {
//             return (
//               <Itemcard
//                 image={product.image}
//                 title={product.title}
//                 price={product.price}
//                 product={product}
//                 key={index}
//               />
//             );
//           })}
//            </div>
//         </div>
//         {/* END OF MAIN */}
//         {show ?
//         <div className='container-sidebar'>
//         <div className="sidebar">
//           <Cart/>
//         </div>
//          </div>
//         : null
//         }
//       </div>
//     </div>
//   )
// }

// export default Home
