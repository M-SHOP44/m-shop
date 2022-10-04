import React,{useState} from 'react';
import axios from 'axios';
import '../Login/style.css';
import IP from '../../api/ip';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../layout/App.css";




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
    <div className='login-container'>
      <div className='form-cont'>
      <div>
      <label htmlFor="email">Password</label>
      <input       
      className='input-login'
       type="email" 
       placeholder='Enter your Password' 
       value={formData.email}
      onChange={(event)=>{
        setFormData({...formData, email: event.target.value})
      }} />
    </div>
    <div>
      <label htmlFor="password">Email</label>
      <input 
      className='input-login'
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
      <a href="#/" id='pwd'>Forget Password?</a>
      <button id='connecter' onClick={send}>Connect</button>
    </div>
    </div>
   
    </>
  )
}

export default Login