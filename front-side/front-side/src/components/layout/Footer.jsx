import React from 'react'
import './App.css';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='GridTable'>
            <div className='footer-col1'>
                <h3>company</h3>
                <ul>
                    <li><a >about us</a></li>
                    <li><a >our service</a></li>    
                    <li><a >privacy policy</a></li>
                    <li><a >affiliate program  </a></li>
                </ul>
            </div>
            <div className='footer-col2'>
                <h3>get help</h3>
                <ul>
                    <li><a >FAQ</a></li>
                    <li><a >shipping</a></li>
                    <li><a >returns</a></li>
                    <li><a >order status</a></li>
                    <li><a >payment options</a></li>
                </ul>
            </div>
            <div className='footer-col3'>
                <h3>online shop</h3>
                <ul>    
                    <li><a >canapé</a></li>
                    <li><a >chaise</a></li>
                    <li><a >table</a></li>
                    <li><a >lit</a></li>

                </ul>
            </div>
            <div className='footer-row2'>
                <h3>follow us</h3>
                <div className='social-links'>
                    <a><i className='fab fa-facebook'></i></a> 
                    <a><i className='fab fa-instagram'></i></a>
                    <a><i className='fab fa-linkedin'></i></a> 
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer