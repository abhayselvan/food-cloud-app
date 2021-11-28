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
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState(0);

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
          imageUrl,
          setImageUrl,
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
