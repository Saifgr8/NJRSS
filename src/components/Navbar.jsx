import React from "react";

const Title = () => {
  return (
    <div>
      <a href="./">
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
  return (
    <div className="Navbar">
      <Title />
      <ul>
        <li>About us</li>
        <li>Contact us</li>
        <li>Home</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
