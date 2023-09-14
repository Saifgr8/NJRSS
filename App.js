import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <StrictMode>
        <Navbar />
        <Body />
        <Footer />
      </StrictMode>
    </>
  );
}

const Navbar = () => {
  return (
    <div className="Navbar">
      <a href="/">
        <img
          className="Logo"
          alt="no img"
          src="https://azure.wgp-cdn.co.uk/app-food-heaven/categories/FoodHeavenLogo-Large.png?qc-size=233,168"
        ></img>
      </a>
      <ul>
        <li>About us</li>
        <li>Contact us</li>
        <li>Home</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
//RestaurantCards(RestaurantList[0]);
const Body = () => {
  return (
    <div className="BodySite">
      {RestaurantList.map((data, index) => {
        return <RestaurantCards {...data} key={index} />;
      })}
    </div>
  );
};

const RestaurantList = [
  {
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/75f9afc1b3665ea8dd57d75b9c6a475d/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    title: "McDonald's® - Bath Road Retail Park",
    rating: "3.8",
    deliveryFee: "£3.79 Delivery Fee",
  },
  {
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/f415cfba87c75a673a71d1b1193b85c2/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    title: "KFC Cippenham - Bath Road",
    rating: "4.2",
    deliveryFee: "£2.29 Delivery Fee",
  },
  {
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/f3ebf1de9dd4a48f8e960386b30dd7dc/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    title: "German Doner Kebab (Slough)",
    rating: "4.2",
    deliveryFee: "£3.50 Delivery Fee",
  },
  {
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/5e455c0fd69db276ef6c942aee82ac8a/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    title: "Pepe's Piri Piri  (Farnham Road, Slough)",
    rating: "4.1",
    deliveryFee: "£3.80 Delivery Fee",
  },
  {
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/83338bd1b29d9693c3f8e97a82e7c708/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg",
    title: "Grill Street",
    rating: "2.8",
    deliveryFee: "£2.90 Delivery Fee",
  },
  {
    image:
      "https://d1ralsognjng37.cloudfront.net/f0a1e1b1-1016-4c2f-8737-5c01208ee672.jpeg",
    title: "Peri Peri Chicken Orignal",
    rating: "3.8",
    deliveryFee: "£3.79 Delivery Fee",
  },
  {
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/47303aec406c0ef37ca7d6aa14d42f1d/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    title: "SMACKS SLOUGH",
    rating: "3.8",
    deliveryFee: "£3.79 Delivery Fee",
  },
  {
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/af834e2c8f9de41c5e41af9b54428c1b/4a9dc0556f3090689240dd59b4617ba7.jpeg",
    title: "Chickaro's Slough",
    rating: "3.8",
    deliveryFee: "£3.79 Delivery Fee",
  },
  {
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/09aa742b23c999a4d273d2f92c63e009/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    title: "Grillogy",
    rating: "3.8",
    deliveryFee: "£3.79 Delivery Fee",
  },
  {
    image:
      "https://d1ralsognjng37.cloudfront.net/7855cf94-3761-4c45-bb18-dae2a1d651ec.jpeg",
    title: "Londis - Lent Rise",
    rating: "3.8",
    deliveryFee: "£3.79 Delivery Fee",
  },
  {
    image:
      "https://d1ralsognjng37.cloudfront.net/f8f45133-e48a-40ac-b305-f28a523fa753.jpeg",
    title: "Original Zorbas Kebabs",
    rating: "3.8",
    deliveryFee: "£3.79 Delivery Fee",
  },
  {
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/047a2b9eafb13fd1395e0a884f6aa29a/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
    title: "Lebanese Grill",
    rating: "3.8",
    deliveryFee: "£3.79 Delivery Fee",
  },
];

const RestaurantCards = ({ image, title, rating, deliveryFee }) => {
  return (
    <div className="RestaurantCards">
      <img className="RestImg" src={image}></img>
      <h4>{title}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryFee}</h4>
    </div>
  );
};

const Footer = () => {
  return <h3>Footer</h3>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
