import React, { forwardRef, useState } from "react";
import "../css/MenuCard.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const MenuCard = forwardRef(({ key, id, name, price, image }, ref) => {
  const [count, setCount] = useState(0);
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
                  <AddIcon htmlColor="tomato" className="shareIcon" />
                </div>

                <div className="shareOption">
                  <span className="shareOptionText">{count}</span>
                </div>

                <div className="shareOption">
                  <RemoveIcon htmlColor="tomato" className="shareIcon" />
                </div>
                <div className="shareOption">
                  <button className="button">Add to Cart</button>
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
