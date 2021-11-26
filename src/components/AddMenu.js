import React, { useState, useEffect, useContext } from "react";
import { RestaurantContext } from "../util/restaurantContext";
import Amplify, { API } from "aws-amplify";
import config from "../aws-exports";
Amplify.configure(config);

function AddMenu() {
  const obj = useContext(RestaurantContext);
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleAdd = (e) => {
    e.preventDefault();
    setItems(
      [...items].concat([
        {
          itemId: itemId,
          itemName: itemName,
          itemPrice: itemPrice,
        },
      ])
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("restaurantsapi", "/restaurants", {
      body: {
        restaurantId: obj.restaurantId,
        name: obj.name,
        cuisine: obj.cuisine,
        city: obj.city,
        address: obj.address,
        rating: obj.rating,
        items: items,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    obj.setPage("completed");
  };
  return (
    <div>
      <ul>
        <li>
          Item ID
          <input
            value={itemId}
            placeholder="Item ID"
            onChange={(e) => {
              setItemId(e.target.value);
            }}
          />
        </li>
        <li>
          Item Name
          <input
            value={itemName}
            placeholder="Item Name"
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
        </li>
        <li>
          Item Price
          <input
            value={itemPrice}
            placeholder="Item Price"
            onChange={(e) => {
              setItemPrice(e.target.value);
            }}
          />
        </li>
      </ul>
      <button onClick={handleAdd}>Add Item</button>
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {items.map((item, i) => {
          <li key={i}>{item.itemName}</li>;
        })}
      </ul>
    </div>
  );
}

export default AddMenu;
