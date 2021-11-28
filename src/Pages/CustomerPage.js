import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import OrderHistory from "./OrderHistory";
import FlipMove from "react-flip-move";
import Amplify, { API, Auth } from "aws-amplify";
import config from "../aws-exports";
import { Button } from "@mui/material";
import { CustomerContext } from "../util/CustomerContext";

Amplify.configure(config);

function CustomerPage() {
  const [page, setPage] = useState("customer");
  const [restaurants, setRestaurants] = useState([]);
  const [userEmail, setUserEmail] = useState("");

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

  const handleClick = (e) => {
    e.preventDefault();
    setPage("orders");
  };

  return (
    <div>
      <Header />
      <CustomerContext.Provider value={{ userEmail }}>
        {page === "customer" && (
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
            <Button onClick={handleClick}>Orders</Button>
          </div>
        )}
        {page === "orders" && <OrderHistory />}
      </CustomerContext.Provider>
    </div>
  );
}

export default CustomerPage;
