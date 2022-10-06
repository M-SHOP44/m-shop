import React from 'react'
import SignIn from '../Signin/SignIn';
import './SignUp.css'
import { useState } from 'react';
import axios from 'axios';
import IP from '../../api/ip';
import { MdCancel } from "react-icons/md";




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
            <div className='m'>
            <p>Sign Up</p>
           <span className='close-btn' onClick={() => props.setTrigger(false)}><MdCancel/></span>

            </div>
          
          <h2>It's free only takes few minutes</h2>
          </div>
          <div className='sign-container'>
          <div className='up'>
        <label >User name</label>
        <input  type="text" placeholder='User name' value={formData.username} onChange={event => {setFormData({...formData, username:event.target.value})}}/>
        </div>
        <div className='up'>
        <label >First name</label>
        <input  type="text" placeholder='First name' value={formData.firstname} onChange={event => {setFormData({...formData, firstname:event.target.value})}}/>
        </div>
        <div className='up'>
        <label >last name</label>
        <input  type="text" placeholder='Last name' value={formData.lastname} onChange={event => {setFormData({...formData, lastname:event.target.value})}}/>
        </div>
        <div className='up'>
        <label >Address Email</label>
        <input  type="text" placeholder='Enter address' value={formData.email} onChange={event => {setFormData({...formData, email:event.target.value})}}/>
        </div>
       <div className='up'>
       <label >Password</label>
       <input  type="password" placeholder='Enter Password' value={formData.password} onChange={event => {setFormData({...formData, password:event.target.value})}}/>
       </div>
        <div className='up'>
        <label >Confirm Password</label>
        <input  type="password" placeholder='Confirm Password' value={formData.confirmpassword} onChange={event => {setFormData({...formData, confirmpassword:event.target.value})}}/>
        </div>
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
