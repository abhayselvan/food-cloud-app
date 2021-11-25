import React, { useState, useEffect } from "react";

import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify, { API } from "aws-amplify";
import config from "../aws-exports";
import Header from "../components/Header";

Amplify.configure(config);

function RestaurantPage() {
  const [restaurantId, setRestaurantId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [ratings, setRatings] = useState(0);
  const [menuItems, setMenuItems] = useState({});
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    API.get("restaurantsapi", "/restaurants/restaurantId").then(
      (fetchedRestaurants) => {
        setRestaurants([...fetchedRestaurants]);
        console.log(fetchedRestaurants);
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("restaurantsapi", "/restaurants", {
      body: {
        restaurantId: restaurantId,
        name: name,
        location: location,
        address: address,
        ratings: ratings,
        menuItems: menuItems,
      },
    }).then(() => {
      setRestaurants([
        ...restaurants,
        {
          restaurantId: restaurantId,
          name: name,
          location: location,
          address: address,
          ratings: ratings,
          menuItems: menuItems,
        },
      ]);
    });
  };

  return (
    <div>
      <Header />
      <h1> Restaurant Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={restaurantId}
          placeholder="restaurant id"
          onChange={(e) => {
            setRestaurantId(e.target.value);
          }}
        />
        <input
          value={name}
          placeholder="restaurant name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          value={location}
          placeholder="location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <input
          value={address}
          placeholder="address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          value={ratings}
          placeholder="ratings"
          onChange={(e) => {
            setRatings(parseInt(e.target.value));
          }}
        />
        <input
          value={menuItems}
          placeholder="menu items"
          onChange={(e) => {
            setMenuItems({
              idly: 2.99,
              dosa: 6.99,
              pongal: 4.99,
            });
          }}
        />
        <button>Add restaurant details</button>
      </form>
      <ul>
        {restaurants.map((restaurant, i) => (
          <li key={i}>{restaurant.restaurantId}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantPage;
