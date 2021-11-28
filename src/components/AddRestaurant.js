import React, { useContext, useRef } from "react";
import { RestaurantContext } from "../util/restaurantContext";
import "../css/AddRestaurant.css";

function AddRestaurant() {
  const formRef = useRef();
  const obj = useContext(RestaurantContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    obj.setPage("menu");
    formRef.current.reset();
  };
  return (
    <div className="add">
      <div className="addTable">
        <div className="formWrapper">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="fieldc">
              <label className="labelc">Restaurant ID : </label>
              <input
                className="inputc"
                required
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
                required
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
                required
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
                required
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
                required
                defaultValue=""
                onChange={(e) => {
                  obj.setAddress(e.target.value);
                }}
              />
            </div>
            <div className="fieldc">
              <label className="labelc"> Image URL : </label>
              <input
                className="inputImageText"
                required
                defaultValue=""
                onChange={(e) => {
                  obj.setImageUrl(e.target.value);
                }}
              />
            </div>
            <div className="fieldc">
              <label className="labelc"> Rating : </label>
              <input
                className="inputc"
                required
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
