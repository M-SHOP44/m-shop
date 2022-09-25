import React from 'react';
import "@fontsource/material-icons-sharp";
import "../style.css"
const Dashboard = () => {



  
  return (
    <div className='container-dasboardAdmin'>
      <aside>
        <div className='top'>
          <div className='logo'>
            {/* <img src="" alt="" /> */}
            <h2>M-SHOP</h2>
          </div>
          <div className='close' id='close-btn'>
         <span className='material-icons-sharp'>close</span>
          </div>
        </div>
        <div className='side-bar'>
          <a href="#">
          <span class="material-symbols-outlined">grid_view</span>
            <h3>Dashboard</h3>
          </a>
          <a href="#" className='active'>
            <span className='material-icons-sharp'>person_outline</span>
            <h3>Custumers</h3>
          </a>
          <a href="#">
            <span className='material-icons-sharp'>receipt_long</span>
            <h3>Orders</h3>
          </a>
          <a href="#">
            <span className='material-icons-sharp'>insights</span>
            <h3>Analytics</h3>
          </a>
          <a href="#">
            <span className='material-icons-sharp'>mail_outline</span>
            <h3>Messages</h3>
            <span className='message-count'>26</span>
          </a>
          <a href="#">
            <span className='material-icons-sharp'>inventory</span>
            <h3>Products</h3>
            
          </a>
          <a href="#">
            <span className='material-icons-sharp'>report_gmailerrorred</span>
            <h3>Reports</h3>
      
          </a>
          <a href="#">
          <span className='material-icons-sharp'>settings</span>
            <h3>Settings</h3>
          </a>
          <a href="#">
            <span className='material-icons-sharp'>add</span>
            <h3>Add Product</h3>
           
          </a>
          <a href="#">
            <h3>Logout</h3>
            <span className='material-icons-sharp'>logout</span>            
          </a>
        </div>


      </aside>
    </div>
    





  )
}

export default Dashboard