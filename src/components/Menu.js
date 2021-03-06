import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MenuCard from "./MenuCard";
import FlipMove from "react-flip-move";
import { API } from "aws-amplify";
import "../css/Menu.css";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { useNavigate } from "@reach/router";

const Menu = ({ id }) => {
  const [menu, setMenu] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const path = `/restaurants/object/${id}`;
    API.get("restaurantsapi", path).then((fetchedMenu) => {
      setRestaurant(fetchedMenu);
      setMenu(fetchedMenu.items);
      console.log(fetchedMenu);
    });
  }, []);

  const addToCartClicked = () => {
    navigate(`/cart?restaurantId=${id}`);
    console.log(restaurant.name);
  };

  return (
    <div>
      <Header />
      <div className="Menu">
        <div className="">
          <div className="shareOptions">
            <div className="shareOption">
              <DinnerDiningIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">{restaurant.name}</span>
            </div>
            <div className="shareOption">
              <LocationCityIcon htmlColor="Gold" className="shareIcon" />
              <span className="shareOptionText">
                {restaurant.address}, {restaurant.city}
              </span>
            </div>
            <div className="shareOption">
              <LocalDiningIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">{restaurant.cuisine}</span>
            </div>
            <div className="shareOption">
              <button className="button" onClick={addToCartClicked}>
                Add All To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <FlipMove>
        {menu.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.imageUrl}
            restaurant={restaurant.name}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Menu;
