import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import FlipMove from "react-flip-move";

function CustomerPage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const restaurants = [
        {
          id: 1,
          name: "Cheesecake Factory",
          cusine: "American",
          rating: 4,
          image:
            "https://fazolis.com/wp-content/uploads/2019/12/P1_20_Images_1241x711_Straw-Cheesecake_LOGO.jpg",
        },
        {
          id: 2,
          name: "Cheesecake Factory",
          cusine: "American",
          rating: 4,
          image:
            "https://fazolis.com/wp-content/uploads/2019/12/P1_20_Images_1241x711_Straw-Cheesecake_LOGO.jpg",
        },
        {
          id: 3,
          name: "Cheesecake Factory",
          cusine: "American",
          rating: 4,
          image:
            "https://fazolis.com/wp-content/uploads/2019/12/P1_20_Images_1241x711_Straw-Cheesecake_LOGO.jpg",
        },
      ];
      setRestaurants(restaurants);
    };

    getRestaurants();
  }, []);

  return (
    <div>
      <Header />

      <FlipMove>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            cusine={restaurant.cusine}
            rating={restaurant.rating}
            image={restaurant.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default CustomerPage;
