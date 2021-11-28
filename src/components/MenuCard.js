import React, { forwardRef, useState, useEffect } from "react";
import "../css/MenuCard.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Items from "../Items";

const MenuCard = forwardRef(({ key, id, name, price, image}, ref) => {
  const [count, setCount] = useState(0);
  const [countChanged, setCountChanged] = useState(false);

  useEffect(async () => {
    if (countChanged) {
      let found = false;
      const item = {
        id: id,
        name: name,
        quantity: count,
        price: price,
        total: price * count,
      };
      if (Items.length !== 0) {
        Items.forEach((item, i) => {
          if (item.name === name) {
            if (count !== 0) {
              item.quantity = count;
              item.total = price * count;
              found = true;
            } else {
              Items.splice(i, 1);
              found = true;
            }
          }
        });
      } else {
        Items.push(item);
        found = true;
      }
      if (found === false) {
        Items.push(item);
      }
      console.log(Items);
    }
  });

  const increment = () => {
    setCount(count + 1);
    setCountChanged(true);
  };
  const decrement = () => {
    setCount(count === 0 ? 0 : count - 1);
    setCountChanged(true);
  };

  return (
    <div className="MenuCard" ref={ref}>
      <div className="wrapper">
        <div className="top">
          <img className="img" src={image} alt="" />

          <div className="center">
            <div className="">
              <div className="shareOption">
                <span className="shareOptionTextName">{name}</span>
              </div>
              <hr className="shareHr" />
            </div>

            <div className="shareBottom">
              <div className="shareOptions">
                <div className="shareOption">
                  <LocalOfferIcon htmlColor="tomato" className="shareIcon" />
                  <span className="shareOptionText">${price}</span>
                </div>

                <div className="shareOption">
                  <AddIcon
                    htmlColor="tomato"
                    className="shareIcon"
                    onClick={increment}
                  />
                </div>

                <div className="shareOption">
                  <span className="shareOptionText">{count}</span>
                </div>

                <div className="shareOption">
                  <RemoveIcon
                    htmlColor="tomato"
                    className="shareIcon"
                    onClick={decrement}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MenuCard;
