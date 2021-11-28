import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import FlipMove from "react-flip-move";
import Amplify, { API, Auth } from "aws-amplify";
import config from "../aws-exports";

Amplify.configure(config);

function CustomerPage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const userInfo = await Auth.currentAuthenticatedUser();
      const fetchedRestaurants = await API.get(
        "restaurantsapi",
        "/restaurants/restaurantId"
      );
      setUserEmail(userInfo.attributes.email);
      setRestaurants(fetchedRestaurants);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div>
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
      <Link to="/orders">
        <button className="Homepage_Button">Orders</button>
      </Link>
    </div>
  );
}

export default CustomerPage;
