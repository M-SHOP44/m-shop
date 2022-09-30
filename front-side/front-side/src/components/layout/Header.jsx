import { useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { FcApproval } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import search from '../../images/lottie/search.json'
import { Link } from "react-router-dom";
import "../layout/App.css";
import SignIn from "../popup/Signin/SignIn";
import SignUp from "../popup/Singup/SignUp";
import { useState, useEffect } from "react";


const Navbar = () => {
  const [logged, setLogged] = useState(false);
  const [client, setClient] = useState(null);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopin, setButtonPopin] = useState(false);
  // const navigate = useNavigate();
  const navRef = useRef();
  const { totalUniqueItems } = useCart();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: search,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("client"))
    console.log(user);
    if(user){
      setClient(user)
      setLogged(true)
      console.log(user);
    }
  },[]);
  
  return (
    <>
      <header className="main-nav">
        <Link to="/" id="myshop">
          M-shop
        </Link>
        <div className='input'>
        <input type="text" class="searchTerm" id="input_text" placeholder='Search...'></input>
        <button type="submit" class="searchButton" >
        <Lottie 
	    options={defaultOptions}
        height={30}
        width={30}
      />       
        </button>
      </div>
        <nav ref={navRef}>
          {logged ? 
          <div className="logout-container">
            <h1 className="username">{client.username}</h1> 
            <button   className="button-user" onClick={()=> {localStorage.removeItem("client");setClient(null); setLogged(false)}}>log out</button>
            </div> : 
            <div className="buttons">
            <div> 
              <button
                type="button"
                className="button-user"
                onClick={() => setButtonPopup(true)}
              >
                Sign up
              </button>
              <SignUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                {" "}
              </SignUp>
            </div>
            <div>
              <button
                type="button"
                className="button-user"
                id="log"
                onClick={() => setButtonPopin(true)}
              >
                Login
              </button>
              <SignIn trigger={buttonPopin} setTrigger={setButtonPopin}>
                {" "}
              </SignIn>
            </div>
          </div>}
        </nav>
      </header>


      <header className="category-nav">
      <div>
      <FcApproval />
          <Link className="seller"
            style={{ textDecoration: "none", fontSize:"20px"}}
            to="/signup"
           >
            {" "}
            Sell at m-shop
          </Link>
          </div>
          
        <nav className='navbar'>
          <a href="/#">canapé</a>
          <a href="/#">Chair</a>
          <a href="/#">Table</a>
          <a href="/#">Bureau</a>
          <a href="/#">Rangement</a>
          <a href="/#">Luminaire</a>
          <a href="/#">Tapis</a>
          <a href="/#">Lit</a>
          </nav>
          {/* onClick={
              () =>
               navigate("/basket")}  */}

          <a href="" id="basket">
            {" "}
            <AiOutlineShoppingCart size={"28px"} />({totalUniqueItems})
          </a>

          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <HiX />
          </button>
        {/* </nav> */}

        <button onClick={showNavBar} className="nav-btn">
          <HiMenu />
        </button>
      </header>
    </>
  );
};

export default Navbar;
