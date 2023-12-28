import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-food-logo-png-image_4743675.png"
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
const RestoCard=()=>{
  return(
    <div className="restocard" style={{backgroundColor:"#f0f0f0"}}>
    <h1>Meghana Foods</h1>
    </div>
  )
}
const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestoCard/>
      </div>
    </div>
  )
}
const AppLout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLout />);
