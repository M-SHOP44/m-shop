import React,{useState} from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import './checkout.css';
import axios from 'axios';
import IP from '../api/ip';

const Checkout = () => {

const [formData, setFormData] = useState({
    streetname:"",
    housename:"",
    postcode:"",
    city:"",
    note:"",
    username:"",
    num:"",
    email:"",
});

const send = () =>{

    var order = formData
   order.products = JSON.parse(localStorage.getItem("react-use-cart"))
    axios.post(`${IP}/order/create`, order)
    .then(response => {
        console.log(response);
        alert('order succesfll')
    })
}

  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
        <section id='section1'>
        <section>
            <h1>Checkout</h1>
            <div id='container'>
               
                    <div id='title'>
                    <h2 >Delivery adresse </h2>
                    </div>
                    <div className='form'>

                        <div>
                        <label className="form-label">Street name</label>
                        <input className="form-control" id="label4" placeholder='Type street name' value={formData.streetname} onChange={e => setFormData(e.target.value)} />
                        </div>
                        
                        <div>
                            <label  className="label-delivery">House number</label>
                            <input className="form-control" placeholder='Type house number'   onChange={event => setFormData(event.target.value)}/>
                        </div>
                        <div>
                            
                            <label  className="label-delivery">Postcode</label>
                            <input className="form-control" placeholder='Type post code' value={formData.postcode} onChange={event => setFormData(event.target.value)}/>
                        </div>
                    
                        <div>
                            <label  className="label-delivery">City</label>
                            <input className="form-control" placeholder='Type city name' value={formData.city} onChange={event => setFormData(event.target.value)}/>
                        </div>
                      
                        <div>
                            <label  className="label-delivery">Add note (optional)</label>
                            <input className="form-control" placeholder="ei: Please don't ring the bell. Babe is sleeping. " value={formData.note} onChange={event => setFormData(event.target.value)}/>
                            <div id='text'>160/160</div>
                        </div>
                    </div>
                <hr />
                <form  >
                    <h2>Personal Details</h2>
                    <div className='form'>
                        <div>
                            <label  className="label-delivery">Username</label>
                            <input className="form-control" placeholder='Type username' value={formData.username} onChange={event => setFormData(event.target.value)}/>
                        </div>
                        <div>
                            <label  className="label-delivery">E-mail</label>
                            <input className="form-control" placeholder='Type Email' value={formData.email} onChange={event => setFormData(event.target.value)}/>
                        </div>
                        <div>
                            <label  className="label-delivery">Phone Number</label>
                            <input className="form-control" placeholder='Type phone number' value={formData.num} onChange={event => setFormData(event.target.value)}/>
                        </div>
                    </div>
                    <div id='text'>When placing an order, you will receive a confirmation, Food Tracker status messages and a request to review the restaurant via email or otherwise (such as push messages).</div>
                </form>
                
            </div>
        </section>
        <div>
        <button  type="button" className="btn btn-primary" id='send' onClick={send} >order & pay with cash </button>
        </div>
    </section>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Checkout



