import axios from 'axios';
import React,{useState} from 'react'
import './SignIn.css'
import IP from '../../api/ip'
import { MdCancel } from "react-icons/md";

function SignIn(props) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
      };
    const [formData, setFormData] = useState({
      email:"",
      password:""
    });
    const send = () => {
      axios.post(`${IP}/auth/client/signin`, formData)
      .then(response => {
        localStorage.setItem("client", JSON.stringify(response.data.client))
        localStorage.setItem("token",response.data.token)
      } )
    };

  return (props.trigger) ? (
    <>
    <div className='main'>
      <div className='popup-container'>
      <form>
        <div className='header-in'>
        <p >Sign In</p>
        {/* <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button> */}
        <span className='close-btn' onClick={() => props.setTrigger(false)}><MdCancel/></span>
        </div>
       <div className='in-container'>
       <div className='in-input'>
      <label >Email address</label>
      <input  type="email" placeholder='Enter email' value={formData.email} onChange={event => {setFormData({...formData, email:event.target.value})}}/>
      </div>
      <div className='in-input'>
      <label >Password</label>
      <input  type="password" placeholder='Enter Password' value={formData.password} onChange={event => {setFormData({...formData, password:event.target.value})}}/>
      </div>
       </div>
    
    
      <div>
      <button  className='signup-btn' onClick={send}>Submit</button>
      </div>
      </form>
      </div>
      
      </div>
    
    </>
  ) :""; 
}


export default SignIn;
