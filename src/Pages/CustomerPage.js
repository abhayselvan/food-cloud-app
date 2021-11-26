import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import FlipMove from "react-flip-move";
import Amplify, { API } from "aws-amplify";
import config from "../aws-exports";
Amplify.configure(config);

function CustomerPage() {
  const [restaurants, setRestaurants] = useState([]);


useEffect(() => {
  API.get("restaurantsapi", "/restaurants/restaurantId").then(
    (fetchedRestaurants) => {
      setRestaurants(fetchedRestaurants);
      console.log(fetchedRestaurants);
    }
  );
}, []);


  return (
    <div>
      <Header />

      <FlipMove>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.restaurantId}
            id={restaurant.restaurantId}
            name={restaurant.name}
            address={restaurant.address}
            city={restaurant.city}
            items={restaurant.items}
            cusine={restaurant.cuisine}
            rating={restaurant.rating}
            image={restaurant.imageUrl}

          />
        ))}
      </FlipMove>
    </div>
  );
}

export default CustomerPage;
