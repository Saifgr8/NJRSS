import { RestaurantList } from "../config";
import { useState } from "react";

const filterData = (clickedRestaurant, searchText) => {
  return clickedRestaurant.filter((restaurant) =>
    restaurant.title.toLowerCase().includes(searchText)
  );
};

const Body = () => {
  const [searchText, setsearchText] = useState();
  const [clickedRestaurant, setclickedRestaurant] = useState(RestaurantList);
  return (
    <>
      <div>
        <input
          type="text"
          prefix="search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setclickedRestaurant(filterData(clickedRestaurant, searchText));
          }}
        >
          Search
        </button>
      </div>
      <div className="BodySite">
        {clickedRestaurant.map((data, index) => {
          return <RestaurantCards {...data} key={index} />;
        })}
      </div>
    </>
  );
};

const RestaurantCards = ({ image, title, rating, deliveryFee }) => {
  return (
    <div className="RestaurantCards">
      <img className="RestImg" src={image}></img>
      <h3>{title}</h3>
      <h4>{rating}</h4>
      <h4>{deliveryFee}</h4>
    </div>
  );
};

export default Body;
