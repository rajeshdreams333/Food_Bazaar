import { CDN_LOGO } from "../utils/constants";
const Header = () => {
    return (
      <div className="header">
        <div>
          <img
            src={CDN_LOGO}
            alt="logo not found"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;