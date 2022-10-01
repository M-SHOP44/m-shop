import React,{useEffect, useState} from 'react';
import "@fontsource/material-icons-sharp";
import "../style.css";
import image from '../../../images/image.jpeg'
const Dashboard = () => {
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("admin"))
    console.log(user);
    if(user){
      setAdmin(user)
      setLogged(true)
      console.log(user);
    }
  },[]);
  
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
          <a href="#" onClick={()=> {localStorage.removeItem("admin");setAdmin(null); setLogged(false)}}>
            <h3>Logout</h3>
            <span className='material-icons-sharp'>logout</span>            
          </a>
        </div>


      </aside>
    {/* END OF ASIDE */}

    <main>
      <h1>Dashboard</h1>
      <div className='date'>
        <input type="date" />
      </div>

      <div className='insights'>
          <div className='sales'>
          <span class="material-symbols-outlined">analytics</span>
          <div className='middle'>
              <div className="lef">
                <h3>Total Sales</h3>
                <h1>25.024 TND</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
          </div>
          <small className='text-muted'>Last 24 Hours</small>
          </div>
          {/* END OF SALES */}
    
          <div className='expenses'>
          <span class="material-symbols-outlined">bar_chart </span>
          <div className='middle'>
              <div className="lef">
                <h3>Total Expenses</h3>
                <h1>14,160 TND</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className="number">
                  <p>62%</p>
                </div>
              </div>
          </div>
          <small className='text-muted'>Last 24 Hours</small>
          </div>
          {/* END OF EXPENSES */}
          <div className='income'>
          <span class="material-symbols-outlined">stacked_line_chart</span>
          <div className='middle'>
              <div className="lef">
                <h3>Total Income</h3>
                <h1>10.864 TND</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className="number">
                  <p>44%</p>
                </div>
              </div>
          </div>
          <small className='text-muted'>Last 24 Hours</small>
          </div>
         {/* END OF INCOMES */}
       </div>
       {/* END OF INSIGHTS */}
       <div className="recent-order">
        <h2>Recent Order</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Foldable Mini Drone</td>
              <td>86594</td>
              <td>Due</td>
              <td className='warning'>Pending</td>
              <td className='primary'>Details</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Foldable Mini Drone</td>
              <td>86594</td>
              <td>Due</td>
              <td className='warning'>Pending</td>
              <td className='primary'>Details</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Foldable Mini Drone</td>
              <td>86594</td>
              <td>Due</td>
              <td className='warning'>Pending</td>
              <td className='primary'>Details</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Foldable Mini Drone</td>
              <td>86594</td>
              <td>Due</td>
              <td className='warning'>Pending</td>
              <td className='primary'>Details</td>
            </tr>
          </tbody>
        </table>
        <a href="#">Show All</a>
       </div>
    </main>
{/* END OF MAIN */}
<div className="right">
  <div className="top">
    <button id='menu-btn'>
      <span className='material-icons-sharp'>menu</span>
    </button>
    <div className="theme-toggler">
      <span className='material-icons-sharp active'>light_mode</span>
      <span className='material-icons-sharp'>dark_mode</span>
    </div>
    <div className="profile">
      <div className="info">
        <p>Hey, <b>sarah</b></p>
        <small className='text-muted'>Admin</small>
      </div>
      <div className="profile-photo">
        <img src={image} alt="" />
      </div>
    </div>
  </div>
  {/* END OF TOP */}
  <div className="recent-updates">
    <h2>Recent Updates</h2>
    <div className="updates">
      <div className="update">
        <div className="profile-photo">
          <img src="" alt="" />
        </div>
        <div className="messages">
          <p><b>Mike tyson</b> received his order of night lion tech gps drone</p>
          <small>2 Minutes ago</small>
        </div>
      </div>
      <div className="update">
        <div className="profile-photo">
          <img src="" alt="" />
        </div>
        <div className="messages">
          <p><b>Mike tyson</b> received his order of night lion tech gps drone</p>
          <small>2 Minutes ago</small>
        </div>
      </div>
      <div className="update">
        <div className="profile-photo">
          <img src="" alt="" />
        </div>
        <div className="messages">
          <p><b>Mike tyson</b> received his order of night lion tech gps drone</p>
          <small>2 Minutes ago</small>
        </div>
      </div>
      <div className="update">
        <div className="profile-photo">
          <img src="" alt="" />
        </div>
        <div className="messages">
          <p><b>Mike tyson</b> received his order of night lion tech gps drone</p>
          <small>2 Minutes ago</small>
        </div>
      </div>
    </div>
  </div>
{/* END OF RECENT UPDATES */}
<div className="sales-analytics">
  <h2>Sales Analytics</h2>
  <div className="item">
   <div className='item offline'>
       <div className="icon">
        <span className='material-icons-sharp'>local_mall</span>
       </div>
       <div className="right">
        <div className="info">
          <h3>OFFLINE ORDERS</h3>
          <small className='text-muted'>Last 24 Hours</small>
        </div>
         <h5 className='danger'>-17%</h5>
         <h3>1100</h3>
       </div>
   </div>
   <div className='item online'>
       <div className="icon">
        <span className='material-icons-sharp'>shopping_cart</span>
       </div>
       <div className="right">
        <div className="info">
          <h3>ONLINE ORDERS</h3>
          <small className='text-muted'>Last 24 Hours</small>
        </div>
         <h5 className='success'>+39%</h5>
         <h3>3849</h3>
       </div>
   </div>
   <div className='item custumers'>
       <div className="icon">
        <span className='material-icons-sharp'>person</span>
       </div>
       <div className="right">
        <div className="info">
          <h3>NEW CUSTUMERS</h3>
          <small className='text-muted'>Last 24 Hours</small>
        </div>
         <h5 className='success'>+25%</h5>
         <h3>849</h3>
       </div>
   </div>
  </div>
  <div className="item add-product">
    <div>
      <span className='material-icons-sharp'>add</span>
      <h3>Add Product</h3>
    </div>

  </div>
</div>

  </div>
</div>
)}

export default Dashboard