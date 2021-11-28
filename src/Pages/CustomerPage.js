import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import FlipMove from "react-flip-move";
import Amplify, { API, Auth } from "aws-amplify";
import config from "../aws-exports";
import { Link } from "@reach/router";

Amplify.configure(config);

function CustomerPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const fetchedRestaurants = await API.get(
        "restaurantsapi",
        "/restaurants/restaurantId"
      );
      setRestaurants(fetchedRestaurants);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {!isLoading && (
        <div>
          <div>
            <FlipMove>
              {restaurants
                .filter((restaurant) => {
                  if (searchTerm == "") {
                    return restaurant;
                  } else if (
                    restaurant.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return restaurant;
                  }
                })
                .map((restaurant) => (
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
      )}
    </div>
  );
}

export default CustomerPage;
