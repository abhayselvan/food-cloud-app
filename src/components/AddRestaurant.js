import React, { useContext } from "react";
import { RestaurantContext } from "../util/restaurantContext";

function AddRestaurant() {
  const value = useContext(RestaurantContext);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     API.post("restaurantsapi", "/restaurants", {
  //       body: {
  //         restaurantId: restaurantId,
  //         name: name,
  //         city: city,
  //         address: address,
  //         rating: rating,
  //         items: items,
  //       },
  //     })
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   };
  return (
    <div>
      <h1> Restaurant Page</h1>
      {/* <form onSubmit={handleSubmit}>
        <input
          value={restaurantId}
          placeholder="restaurant id"
          onChange={(e) => {
            setRestaurantId(e.target.value);
          }}
        />
        <input
          value={name}
          placeholder="restaurant name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          value={city}
          placeholder="city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input
          value={address}
          placeholder="address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          value={rating}
          placeholder="rating"
          onChange={(e) => {
            setRating(parseInt(e.target.value));
          }}
        />
        <button>Add Menu Items</button>
      </form> */}
    </div>
  );
}

export default AddRestaurant;
