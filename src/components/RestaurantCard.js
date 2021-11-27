import React, { forwardRef } from "react";
import { Link } from "@reach/router";
import "../css/RestaurantCard.css";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ReactStars from "react-rating-stars-component";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import {useNavigate} from "@reach/router";

const RestaurantCard = forwardRef(
  ({ key, id, name, address, city, items, cusine, rating, image }, ref) => {

    const navigate = useNavigate();
    const moveToItemList = () => {
      navigate(`/restaurant/${id}`)  
    }
    

    return (
      <div className="RestaurantCard" ref={ref} onClick={moveToItemList}>
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
                    <LocationCityIcon htmlColor="Gold" className="shareIcon" />
                    <span className="shareOptionText">
                      {address}, {city}
                    </span>
                  </div>
                  <div className="shareOption">
                    <LocalDiningIcon htmlColor="green" className="shareIcon" />
                    <span className="shareOptionText">{cusine}</span>
                  </div>

                  <div className="shareOption">
                    <ReactStars
                      count={5}
                      value={rating}
                      size={16}
                      activeColor="tomato"
                      edit={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/restaurant/${id}`}>
              <button className="choose">Choose</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

export default RestaurantCard;
