import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";
const Header = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <div className="header">
      <div>
        <img src={CDN_LOGO} alt="logo not found" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
