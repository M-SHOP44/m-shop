import React from "react";
import Header from "./components/layout/Header";
import Osh from "./components/Shopkeeper/Osh/Osh"
import { Route,Routes} from "react-router-dom";
import '../src/components/layout/App.css'
import Form from "./components/Shopkeeper/register/Form";
import Login from "./components/Shopkeeper/Login/Login";
import Shopowner from "./components/Shopkeeper/Dashboard/Shopowner";
import Home from "./components/pages/home/Home";
import Footer from "./components/layout/Footer";
const App = ()=>{
    return(  
        <>
    <Header/>
     <Routes>
        <Route path="/home" element={<Home/>}    />
        <Route path="/signup" element={<Osh/>}/>
        <Route path="/createaccount" element={<Form/>} />
        <Route path="/sellercenter" element={<Login/>} />
        <Route path="/shopowner" element={<Shopowner/>} />
     </Routes>
      <Footer/>
        </>
    )
}

export default App;

