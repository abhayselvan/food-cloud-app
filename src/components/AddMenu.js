import React, { useContext } from "react";
import { RestaurantContext } from "../util/restaurantContext";

function AddMenu() {
  const value = useContext(RestaurantContext);
  return (
    <div>
      <h1>Add Menu</h1>
    </div>
  );
}

export default AddMenu;
