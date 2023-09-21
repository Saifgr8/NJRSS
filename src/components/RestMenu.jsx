import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantList } from "../config";

const RestMenu = () => {
  const { id } = useParams();
  const selectedRestaurant = RestaurantList.find((data) => data.id === id);
  if (!selectedRestaurant) {
    return <div>No Restaurant found</div>;
  }
  const { image, title, dish } = selectedRestaurant;

  return (
    <div>
      <h1>Rest ID: {id}</h1>
      <img className="MenuImg" src={image}></img>
      <h1>{title}</h1>
      <ul>
        <li>{dish}</li>
      </ul>
    </div>
  );
};

export default RestMenu;
