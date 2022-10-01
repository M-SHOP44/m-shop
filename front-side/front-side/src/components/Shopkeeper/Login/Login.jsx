import React,{useState} from 'react';
import axios from 'axios';
import '../Login/style.css';
import IP from '../../api/ip';
import { useNavigate } from "react-router-dom";




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
    <div className='login-container'>
      <div className='form-cont'>
      <div>
      <label htmlFor="email">Email</label>
      <input       
      className='input-login'
       type="email" 
       placeholder='Email' 
       value={formData.email}
      onChange={(event)=>{
        setFormData({...formData, email: event.target.value})
      }} />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input 
      className='input-login'
      type="password" 
      placeholder='Password'
      value={formData.password}
      onChange={(event)=>{
        setFormData({...formData, password: event.target.value})
      }}
      />
    </div>
      </div>
     
    <div id='forget-password'>
      <a href="#/">Forget Password?</a>
    </div>
    <div>
      <button id='connecter' onClick={send}>SE CONNECTER</button>
    </div>
    </div>
   
    </>
  )
}

export default Login