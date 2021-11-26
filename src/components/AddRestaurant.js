import React, { useContext } from "react";
import { RestaurantContext } from "../util/restaurantContext";

function AddRestaurant() {
  const obj = useContext(RestaurantContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    obj.setPage("menu");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            Restaurant ID:
            <input
              value={obj.restaurantId}
              placeholder="restaurant id"
              onChange={(e) => {
                obj.setRestaurantId(e.target.value);
              }}
            />
          </li>
          <li>
            Restaurant Name:
            <input
              value={obj.name}
              placeholder="restaurant name"
              onChange={(e) => {
                obj.setName(e.target.value);
              }}
            />
          </li>
          <li>
            Cuisine:
            <input
              value={obj.cuisine}
              placeholder="cuisine"
              onChange={(e) => {
                obj.setCuisine(e.target.value);
              }}
            />
          </li>
          <li>
            City:
            <input
              value={obj.city}
              placeholder="city"
              onChange={(e) => {
                obj.setCity(e.target.value);
              }}
            />
          </li>
          <li>
            Address:
            <input
              value={obj.address}
              placeholder="address"
              onChange={(e) => {
                obj.setAddress(e.target.value);
              }}
            />
          </li>
          <li>
            Rating:
            <input
              value={obj.rating}
              placeholder="rating"
              onChange={(e) => {
                obj.setRating(parseInt(e.target.value));
              }}
            />
          </li>
        </ul>
        <button>Add Menu Items</button>
      </form>
    </div>
  );
}

export default AddRestaurant;
