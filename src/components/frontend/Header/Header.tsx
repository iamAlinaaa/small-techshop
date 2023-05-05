import React from "react";
// we import Link from react-router-dom to have ability to navigate to necessary components
import { Link } from "react-router-dom";
import "./Header.css";
import { IItems } from "../../backend/data/data";

const Header:React.FC<{
  cartItems: IItems[] | any}> = (props) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            TechShop
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="cart" className="cart">
              Cart
              <span className="cart-length">{props.cartItems.length === 0 ? "" : props.cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
