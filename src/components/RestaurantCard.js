import React, { forwardRef } from "react";
import { Link } from "@reach/router";
import "../css/RestaurantCard.css";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ReactStars from "react-rating-stars-component";

const RestaurantCard = forwardRef(
  ({ key, id, name, cusine, rating, image }, ref) => {
    return (
      <div className="RestaurantCard" ref={ref}>
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
                    <LocalDiningIcon htmlColor="green" className="shareIcon" />
                    <span className="shareOptionText">{cusine}</span>
                  </div>
                  <div className="shareOption">
                    <ReactStars
                      count={5}
                      value={rating}
                      size={20}
                      activeColor="tomato"
                      edit={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/restaurant/${name}`}>
              <button className="choose">Choose</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

export default RestaurantCard;
