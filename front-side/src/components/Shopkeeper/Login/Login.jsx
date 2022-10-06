import React,{useState} from 'react';
import axios from 'axios';
import '../Login/style.css';
import IP from '../../api/ip';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../layout/App.css";
import { BsFillPersonFill,BsLockFill } from "react-icons/bs";




const Login= () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
  email:"",
  password:"" 
  });
  


const send = () => {
  axios.post(`${IP}/auth/shopowner/signin`, formData)
  .then(response => {
    if(response.data.token){
      navigate("/DashboardShopowner");
    console.log(response);
    }
  })
}


  return (
    <>
     <header className="main-nav">
     <Link to="/" id="myshop">
          M-shop
        </Link>
     </header>
     <main>
     <div className='shoplogin-container'>
      <div className='form-shop'>
      <div className='input-shop'>
      <label htmlFor="email"><BsFillPersonFill className='icon'/></label>
      <input       
       className='shop-login'
       type="email" 
       placeholder='Enter your Password' 
       value={formData.email}
      onChange={(event)=>{
        setFormData({...formData, email: event.target.value})
      }} />
    </div>
    <div className='input-shop'>
      <label htmlFor="password"><BsLockFill className='icon'/></label>
      <input 
      className='shop-login'
      type="password" 
      placeholder='Enter your Email'
      value={formData.password}
      onChange={(event)=>{
        setFormData({...formData, password: event.target.value})
      }}
      />
    </div>
      </div>
   
    <div id='forget-password'>
      <div className='forget'>
      <a href="#/" >Forget Password?</a>
      </div>
      <div>
      <button id='connecter' onClick={send}>Log in</button>
      </div>
     
    </div>
    </div>
     </main>
    
   
    </>
  )
}

export default Login