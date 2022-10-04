import { useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { FcApproval } from "react-icons/fc";
import { useCart } from "react-use-cart";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../layout/App.css";
import SignIn from "../popup/Signin/SignIn";
import SignUp from "../popup/Singup/SignUp";
import { useState, useEffect } from "react";
// import Cart from '.././shop/Cart'
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

  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("client"));
    console.log(user);
    if (user) {
      setClient(user);
      setLogged(true);
      console.log(user);
    }
  }, []);

  return (
    <>
      <header className="main-nav">
        <Link to="/" id="myshop">
          M-shop
        </Link>
        <div>
<<<<<<< HEAD
        <input  type="text" class="searchTerm" id="input_text" placeholder='Search...'></input>
        <button type="submit" class="searchButton" >   
        </button>
=======
          <FcApproval />
          <Link
            style={{ textDecoration: "none" }}
            to="/signup"
            className="seller"
          >
            Sell at m-shop
          </Link>
>>>>>>> 9d4a70426a027e07ae44633463552733fb1b5ddd
        </div>
        
        <nav ref={navRef}>
          {logged ? (
            <div className="logout-container">
              <h1 className="username">{client.username}</h1>
              <button
                className="button-user"
                onClick={() => {
                  localStorage.removeItem("client");
                  setClient(null);
                  setLogged(false);
                }}
              >
                log out
              </button>
            </div>
          ) : (
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
            </div>
<<<<<<< HEAD
          </div>}
=======
          )}
>>>>>>> 9d4a70426a027e07ae44633463552733fb1b5ddd
        </nav>
      </header>


      <header className="category-nav">
      <div >
      <FcApproval />
          <Link className="seller"
            style={{ textDecoration: "none", fontSize:"20px"}}
            to="/signup"
           >
            {" "}
            Sell at m-shop
          </Link>
          </div>
        <nav ref={navRef}>
          <div className="category">
            <a href="/#">canapé</a>
            <a href="/#">Chair</a>
            <a href="/#">Table</a>
            <a href="/#">Bureau</a>
            <a href="/#">Rangement</a>
            <a href="/#">Luminaire</a>
            <a href="/#">Tapis</a>
            <a href="/#">Lit</a>
          </div>

          {/* onClick={
              () =>
               navigate("/basket")}  */}

          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <HiX />
          </button>
        </nav>
        <div className="basket">
          <span class="material-symbols-outlined">
            shopping_bag
            <h4>({totalUniqueItems})</h4>
          </span>
          {/* {show ? <Cart/> :null} */}
        </div>
        <button onClick={showNavBar} className="nav-btn">
          <HiMenu />
        </button>
      </header>
    </>
  );
};

export default Navbar;
