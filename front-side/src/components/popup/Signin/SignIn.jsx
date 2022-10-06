import axios from 'axios';
import React,{useState} from 'react'
import './SignIn.css'
import IP from '../../api/ip'

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
        <div className='header'>
        <p className='title'>Sign In</p>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        </div>
        <hr/>
      <div>
      <label className='Email'>Email address</label>
      <input className='Emailin' type="email" placeholder='Enter email' value={formData.email} onChange={event => {setFormData({...formData, email:event.target.value})}}/>
      </div>
      <div>
      <label className='Pwd'>Password</label>
      <input className='Pwdin' type="password" placeholder='Enter Password' value={formData.password} onChange={event => {setFormData({...formData, password:event.target.value})}}/>
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
