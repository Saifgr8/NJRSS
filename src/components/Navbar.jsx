import React, { useState } from "react";
import logo from "../images/saifnew-modified.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <div>
      <a href="http://localhost:1234/">
        <img
          className="h-28 p-2"
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
    <div className="flex justify-between bg-yellow-200 shadow-lg ">
      <Title />
      <ul className="flex py-9">
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>{" "}
        <li className="px-2">
          <Link to="/about">About us</Link>
        </li>
        <li className="px-2">
          <Link to="/contact">Contact</Link>
        </li>{" "}
        <li className="px-2">
          <Link to="/">Cart</Link>
        </li>
        <li className="px-2">
          <Link to="/villamart">VillaMart</Link>
        </li>
      </ul>
      <div>
        <div>{checkOnline ? <h5>Online 🟢</h5> : <h5>Offline 🔴</h5>}</div>
        {LoggedIn ? (
          <button className="py-8" onClick={() => setLoggedIn(false)}>
            Login
          </button>
        ) : (
          <button className="py-8" onClick={() => setLoggedIn(true)}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
