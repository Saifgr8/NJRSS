import { RestaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const filterData = (clickedRestaurant, searchText) => {
  return clickedRestaurant.filter((restaurant) =>
    restaurant?.title?.toLowerCase().includes(searchText?.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [clickedRestaurant, setclickedRestaurant] = useState([]);
  const [LoadingPage, setLoadingPage] = useState([]);

  useEffect(() => {
    getRestData();
  }, [searchText]);

  async function getRestData() {
    const data = RestaurantList;
    setLoadingPage(data);
    setclickedRestaurant(data);
  }

  if (!LoadingPage) return null;

  return LoadingPage.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input
          type="text"
          prefix=""
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setclickedRestaurant(filterData(LoadingPage, searchText));
          }}
        >
          Search
        </button>
      </div>
      <div className="BodySite">
        {clickedRestaurant.map((data, index) => {
          return (
            <Link key={index} to={"restaurant/" + data.id}>
              <RestaurantCards {...data} />;
            </Link>
          );
        })}
      </div>
    </>
  );
};

export const RestaurantCards = ({ image, title, rating, deliveryFee }) => {
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

const NotFound = () => {
  const [searchText, setsearchText] = useState("");
  const [clickedRestaurant, setclickedRestaurant] = useState(RestaurantList);
  const [LoadingPage, setLoadingPage] = useState(RestaurantList);

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setclickedRestaurant(filterData(LoadingPage, searchText));
        }}
      >
        Search
      </button>
      <h1>Not found</h1>
    </div>
  );
};
