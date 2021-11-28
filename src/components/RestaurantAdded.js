import React, { useContext } from "react";
import { RestaurantContext } from "../util/restaurantContext";
import "../css/RestaurantAdded.css";

function RestaurantAdded() {
  const { setPage } = useContext(RestaurantContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage("restaurant");
  };
  return (
    <div className="add">
      <div className="addTable">
        <span className="addedText">Restaurant added successfully!</span>
        <button onClick={handleSubmit}>Add new restaurant</button>
      </div>
    </div>
  );
}

export default RestaurantAdded;
