import React from 'react'
import SignIn from '../Signin/SignIn';
import './SignUp.css'
import { useState } from 'react';
import axios from 'axios';
import IP from '../../api/ip';




function SignUp(props) {
   

    const [toggel, setToggel]=useState(false)
    const [formData, setFormData] = useState({
      username:'',
      firstname:'',
      lastname:'',
      email: '',
      password: '',
      confirmpassword: ''
    })

    const send = () => {
      axios.post(`${IP}/auth/client/signup`, formData)
      .then((response) => {
        localStorage.setItem("client", JSON.stringify(response.data.client))
        localStorage.setItem("token",response.data.token)
        
      
      })
    }
    
  return (props.trigger) ? (
    <>
    <div className='main'>
    <div className='popup-container'>
        <form >
          <div className='header'>
          <p className='title'>Sign Up</p>
          <span className='close-btn' onClick={() => props.setTrigger(false)}>X</span>
          </div>
     
        <hr/>
        <div>
        <label className='inputup'>User name</label>
        <input className='username' type="text" placeholder='User name' value={formData.username} onChange={event => {setFormData({...formData, username:event.target.value})}}/>
        </div>
        <div>
        <label className='name'>First name</label>
        <input className='nameinput' type="text" placeholder='First name' value={formData.firstname} onChange={event => {setFormData({...formData, firstname:event.target.value})}}/>
        </div>
        <div>
        <label className='lastname'>last name</label>
        <input className='lastnameinput' type="text" placeholder='Last name' value={formData.lastname} onChange={event => {setFormData({...formData, lastname:event.target.value})}}/>
        </div>
        <div>
        <label className='email'>Address Email</label>
        <input className='emailinput' type="text" placeholder='Enter address' value={formData.email} onChange={event => {setFormData({...formData, email:event.target.value})}}/>
        </div>
       <div>
       <label className='pwd'>Password</label>
       <input className='pwdinput' type="password" placeholder='Enter Password' value={formData.password} onChange={event => {setFormData({...formData, password:event.target.value})}}/>
       </div>
        <div>
        <label className='confirm'>Confirm Password</label>
        <input className='confirmpwd' type="password" placeholder='Confirm Password' value={formData.confirmpassword} onChange={event => {setFormData({...formData, confirmpassword:event.target.value})}}/>
        </div>
        <div>
        <p className='signin'>Already resgistred <span id='in'>sign in?</span></p>

        {toggel && <SignIn/>}
        </div>
        <div>
        <button className='signup-btn' type='submit' onClick={send}>SignUp</button>
        </div>
        
      
        </form  >
       
       
    </div>
    </div>
    </>
  ) :"";
  
}

export default SignUp;
