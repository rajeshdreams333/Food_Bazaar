import { useEffect, useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btn, setBtn] = useState("Login");
  useEffect(() => {
    console.log("Use Effect called....");
  }, []);
  return (
    <div className="header">
      <div>
        <img src={CDN_LOGO} alt="logo not found" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
