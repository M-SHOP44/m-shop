import React , {useState} from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import '../src/components/layout/App.css'
import Form from "./components/Shopkeeper/register/Form";
import Login from "./components/Shopkeeper/Login/Login";
import Shopowner from "./components/Shopkeeper/Dashboard/Shopowner";
import Home from "./components/pages/home/Home";
import LoginAdmin from './components/admin/Login-admin.jsx';
import Dashboard from "./components/admin/Dashboard/Dashboard.jsx"
import {CartProvider}  from "react-use-cart"
import Checkout from "./components/shop/Checkout";
import Cart from "./components/shop/Cart";

const App = ()=>{

  const [products, setProducts] = useState([])


    return(  
    <CartProvider>
      <Router>
        <Routes>
        <Route path="/"  element={<Home />}/>
        <Route  path="/signup"  element={<Form/>}   />
        <Route path="/login"  element={<LoginAdmin/>}  />
        <Route path="/sellercenter"  element={<Login/>}  />
        <Route path="/DashboardAdmin"  element={<Dashboard/>}  />
        <Route path="/DashboardShopowner"  element={<Shopowner/>}  />
        <Route path="/checkout"  element={<Checkout products={products} />}  />
        <Route path="/basket"  element={<Cart  setProducts={setProducts}/>}  />
        



      </Routes>
      </Router>
      </CartProvider>
    )
}

export default App;

