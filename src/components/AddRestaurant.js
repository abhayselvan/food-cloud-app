import React, { useContext } from "react";
import { RestaurantContext } from "../util/restaurantContext";
import "../css/AddRestaurant.css";

function AddRestaurant() {
  const obj = useContext(RestaurantContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    obj.setPage("menu");
  };
  return (
    <div className="add">
      <div className="addTable">
        <div className="formWrapper">
          <form onSubmit={handleSubmit}>
            <div className="fieldc">
              <label className="labelc">Restaurant ID : </label>
              <input
                className="inputc"
                defaultValue=""
                onChange={(e) => {
                  obj.setRestaurantId(e.target.value);
                }}
              />
            </div>

            <div className="fieldc">
              <label className="labelc">Restaurant Name : </label>
              <input
                className="inputc"
                defaultValue=""
                onChange={(e) => {
                  obj.setName(e.target.value);
                }}
              />
            </div>
            <div className="fieldc">
              <label className="labelc">Cuisine :</label>
              <input
                className="inputc"
                defaultValue=""
                onChange={(e) => {
                  obj.setCuisine(e.target.value);
                }}
              />
            </div>
            <div className="fieldc">
              <label className="labelc">City : </label>
              <input
                className="inputc"
                defaultValue=""
                onChange={(e) => {
                  obj.setCity(e.target.value);
                }}
              />
            </div>
            <div className="fieldc">
              <label className="labelc"> Address : </label>
              <input
                className="inputc"
                defaultValue=""
                onChange={(e) => {
                  obj.setAddress(e.target.value);
                }}
              />
            </div>
            <div className="fieldc">
              <label className="labelc"> Rating : </label>
              <input
                className="inputc"
                defaultValue=""
                onChange={(e) => {
                  obj.setRating(parseInt(e.target.value));
                }}
              />
            </div>

            <button className="buttonc">Add Menu Items</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRestaurant;
