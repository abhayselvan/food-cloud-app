import React, { useState, useEffect, useContext, useRef } from "react";
import { RestaurantContext } from "../util/restaurantContext";
import Amplify, { API } from "aws-amplify";
import config from "../aws-exports";
import "../css/AddMenu.css";
Amplify.configure(config);

function AddMenu() {
  const obj = useContext(RestaurantContext);
  const formRef = useRef();
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemImageUrl, setItemIageUrl] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleAdd = (e) => {
    e.preventDefault();
    formRef.current.reset();
    setItems(
      [...items].concat([
        {
          id: itemId,
          name: itemName,
          imageUrl: itemImageUrl,
          price: itemPrice,
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
        imageUrl: obj.imageUrl,
        rating: obj.rating,
        items: items,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    obj.setPage("completed");
  };
  return (
    <div className="add">
      <div className="addTable">
        <div className="formWrapper">
          <form ref={formRef}>
            <div className="fieldc">
              <label className="labelc">Item ID : </label>
              <input
                className="inputc"
                defaultValue=""
                onChange={(e) => {
                  setItemId(e.target.value);
                }}
              />
            </div>
            <div className="fieldc">
              <label className="labelc">Item Name : </label>
              <input
                className="inputc"
                defaultValue=""
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
              />
            </div>
            <div className="fieldc">
              <label className="labelc">Item Price : </label>
              <input
                className="inputc"
                defaultValue=""
                onChange={(e) => {
                  setItemPrice(e.target.value);
                }}
              />
            </div>
            <div className="fieldc">
              <label className="labelc">Item Image URL : </label>
              <input
                className="inputImageText"
                defaultValue=""
                onChange={(e) => {
                  setItemIageUrl(e.target.value);
                }}
              />
            </div>

            <button className="buttonitem" onClick={handleAdd}>
              Add Item
            </button>
            <button className="buttonsubmit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          <ul>
            {items.map((item, i) => {
              return <li key={i}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddMenu;
