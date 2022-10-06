import React,{useState} from 'react';
import axios from 'axios';
import './admin.css';
import IP from '../api/ip';
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill,BsLockFill } from "react-icons/bs";




const Login= () => {
 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  username:"",
  password:"" 
  });



const send = () => {
  axios.post(`${IP}/auth/admin/signin`, formData)
  .then(response => {

    if(response.data.token){
      navigate("/DashboardAdmin");
      console.log(response);

    }

  })
}


  return (
    <>
    <div className='adminlogin-container'>
       <div className='form-admin'>
        <div className='input-admin'>
        <label htmlFor="username"><BsFillPersonFill className='icon'/></label>
      <input type="username" placeholder='Username' value={formData.username}
      className="admin-login"
      onChange={(event)=>{
        setFormData({...formData, username: event.target.value})
      }} />
        </div>
        <div className='input-admin'>
      <label htmlFor="password"><BsLockFill className='icon'/></label>
      <input 
      className="admin-login"
      type="password" 
      placeholder='Password'
      value={formData.password}
      onChange={(event)=>{
        setFormData({...formData, password: event.target.value})
      }}
      />
    </div>
    </div>
 <div className='footer-logadmin'>
 <div className='forget'>
      <a href="#/">Forget Password?</a>
    </div>
    <div >
      <button className='log' onClick={send} >SE CONNECTER</button>
    </div>
 </div>
    
    </div>
   
    </>
  )
}

export default Login