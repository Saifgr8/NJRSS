import { RestaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Resuable";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [clickedRestaurant, setclickedRestaurant] = useState([]);
  const [LoadingPage, setLoadingPage] = useState([]);
  

  useEffect(() => {
    getRestData();
    return () => {
      console.log("Dismount");
    };
  }, [searchText]);

  async function getRestData() {
    const data = RestaurantList;
    setLoadingPage(data);
    setclickedRestaurant(data);
  }

  if (!LoadingPage) return null;

  
  const checkOnline = useOnline();
  if (!checkOnline) {
    return <h1>🔴 Check your internet connection.</h1>;
  }

  return LoadingPage.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-yellow-100 h-auto">
        <input className="p-2 m-2 border-spacing-3 bg-green-100"
          type="text"
          placeholder="Type..."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button className="p-2 m-2 bg-green-200 rounded-lg hover:bg-green-500"
          onClick={() => {
            setclickedRestaurant(filterData(LoadingPage, searchText));
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-between flex-wrap bg-yellow-100">
        {clickedRestaurant.map((data, index) => {
          return (
            <Link key={index} to={"restaurant/" + data.id}>
              <RestaurantCards {...data}/>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export const RestaurantCards = ({ image, title, rating, deliveryFee}) => {
  return (
    <div className="bg-yellow-200 my-2">
      <img className="w-52 h-52" src={image}></img>
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
