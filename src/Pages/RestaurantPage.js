import React, { useState, useEffect } from "react";
import Amplify, { API } from "aws-amplify";
import config from "../aws-exports";
import Header from "../components/Header";
import { RestaurantContext } from "../util/restaurantContext";
import AddRestaurant from "../components/AddRestaurant";
import AddMenu from "../components/AddMenu";

Amplify.configure(config);

function RestaurantPage() {
  const [page, setPage] = useState("menu");
  const [restaurantId, setRestaurantId] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState(0);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    API.get("restaurantsapi", "/restaurants/restaurantId")
      .then((res) => {
        console.log("get all");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    API.del("restaurantsapi", "/restaurants/object/1")
      .then((res) => {
        console.log("delete one");
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
      <RestaurantContext.Provider value="hello">
        <div>{page === "restaurant" ? <AddRestaurant /> : <AddMenu />}</div>
      </RestaurantContext.Provider>
    </div>
  );
}

export default RestaurantPage;
