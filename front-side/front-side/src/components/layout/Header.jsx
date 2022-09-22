import {useRef} from "react";
import {HiMenu} from "react-icons/hi";
import {HiX} from "react-icons/hi";
import { FcApproval} from "react-icons/fc";
import { Link } from "react-router-dom";
import '../layout/App.css'
import SignIn from "../popup/SignIn";
import SignUp from "../popup/SignUp";
import { useState } from "react";


const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopin, setButtonPopin] = useState(false);

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

    return (
      <>
        <header className="main-nav">
            <Link to="/" id="myshop">M-shop</Link>
            <div >
              <FcApproval/><Link  style={{textDecoration: 'none'}} to="/signup" className="seller"  > Sell at m-shop</Link>
              </div>
            <nav ref={navRef}>
              <div className="buttons">
                <div> <button type="button" className="button-user" onClick={()=> setButtonPopup(true)}>Sign up</button>
                <SignUp trigger={buttonPopup} setTrigger={setButtonPopup}></SignUp>
                </div>
                <div><button type="button" className="button-user" id="log" onClick={() => setButtonPopin(true)}>Login</button>
                <SignIn trigger={buttonPopin} setTrigger={setButtonPopin}></SignIn>
                </div>
              </div>
            </nav>   
        </header>
        <header className="category-nav">
             <nav  ref={navRef}>
            <a href="/">canapé</a>
            <a href="/">Chair</a>
            <a href="/">Table</a>
            <a href="/">Bureau</a>
            <a href="/">Rangement</a>
            <a href="/">Luminaire</a>
            <a href="/">Tapis</a>
            <a href="/">Lit</a>

            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <HiX/>
            </button>
            </nav>
            
            <button onClick={showNavBar} className="nav-btn">
            <HiMenu/>
            </button>   
            
        </header>
        </>

    )
  };
  
  export default Navbar;
  
