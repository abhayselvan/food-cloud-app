import React, { useState, useEffect } from "react";
import Amplify, { API } from "aws-amplify";
import config from "../aws-exports";
import Header from "../components/Header";
import { RestaurantContext } from "../util/restaurantContext";
import AddRestaurant from "../components/AddRestaurant";
import AddMenu from "../components/AddMenu";
import RestaurantAdded from "../components/RestaurantAdded";

Amplify.configure(config);

function RestaurantPage() {
  const [page, setPage] = useState("restaurant");
  const [restaurantId, setRestaurantId] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    API.get("restaurantsapi", "/restaurants/restaurantId")
      .then((res) => {
        console.log("get all");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    API.get("restaurantsapi", "/restaurants/object/1")
      .then((res) => {
        console.log("get one");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <RestaurantContext.Provider
        value={{
          page,
          setPage,
          restaurantId,
          setRestaurantId,
          name,
          setName,
          city,
          setCity,
          address,
          setAddress,
          rating,
          setRating,
          cuisine,
          setCuisine,
        }}
      >
        <div>
          {page === "restaurant" && <AddRestaurant />}
          {page === "menu" && <AddMenu />}
          {page === "completed" && <RestaurantAdded />}
        </div>
      </RestaurantContext.Provider>
    </div>
  );
}

export default RestaurantPage;
