import React, { useState } from "react";
import logo from "../images/saifnew-modified.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <div>
      <a href="http://localhost:1234/">
        <img
          className="Logo"
          alt="no img"
          src="https://azure.wgp-cdn.co.uk/app-food-heaven/categories/FoodHeavenLogo-Large.png?qc-size=233,168"
        ></img>
      </a>
    </div>
  );
};

const Navbar = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const checkOnline = useOnline();

  return (
    <div className="Navbar">
      <Title />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>{" "}
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>{" "}
        <li>
          <Link to="/">Cart</Link>
        </li>
        <li>
          <Link to="/villamart">VillaMart</Link>
        </li>
      </ul>
      <div>
        <div>{checkOnline? (<h5>Online 🟢</h5>) : (<h5>Offline 🔴</h5>)}</div>
        {LoggedIn ? (
          <button onClick={() => setLoggedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
