import React, { useContext, useRef } from "react";
import { RestaurantContext } from "../util/restaurantContext";

function AddRestaurant() {
  const formRef = useRef();
  const obj = useContext(RestaurantContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    obj.setPage("menu");
    formRef.current.reset();
  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <ul>
          <li>
            Restaurant ID:
            <input
              defaultValue=""
              placeholder="restaurant id"
              onChange={(e) => {
                obj.setRestaurantId(e.target.value);
              }}
            />
          </li>
          <li>
            Restaurant Name:
            <input
              defaultValue=""
              placeholder="restaurant name"
              onChange={(e) => {
                obj.setName(e.target.value);
              }}
            />
          </li>
          <li>
            Cuisine:
            <input
              defaultValue=""
              placeholder="cuisine"
              onChange={(e) => {
                obj.setCuisine(e.target.value);
              }}
            />
          </li>
          <li>
            City:
            <input
              defaultValue=""
              placeholder="city"
              onChange={(e) => {
                obj.setCity(e.target.value);
              }}
            />
          </li>
          <li>
            Address:
            <input
              defaultValue=""
              placeholder="address"
              onChange={(e) => {
                obj.setAddress(e.target.value);
              }}
            />
          </li>
          <li>
            Rating:
            <input
              defaultValue=""
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
