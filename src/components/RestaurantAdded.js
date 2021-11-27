import React, { useContext } from "react";
import { RestaurantContext } from "../util/restaurantContext";

function RestaurantAdded() {
  const { setPage } = useContext(RestaurantContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage("restaurant");
  };
  return (
    <div>
      <h1>Restaurant added successfully!</h1>
      <button onClick={handleSubmit}>Add new restaurant</button>
    </div>
  );
}

export default RestaurantAdded;
