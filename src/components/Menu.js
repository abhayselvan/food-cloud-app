import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MenuCard from "./MenuCard";
import FlipMove from "react-flip-move";
import Items from "../Items";

const Menu = ({ name }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      const menu = [
        {
          id: 1,
          name: "Classic Newyork Cheescake",
          price: 20,
          image:
            "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
        },
        {
          id: 2,
          name: "French Fries",
          price: 10,
          image:
            "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        },
      ];
      setMenu(menu);
    };

    getMenu();
  }, []);

  const addToCartClicked = () => {
    console.log(Items);
  };

  return (
    <div>
      <Header />
      <div className="shareOptionText">
        <span className="shareOptionText">{name}</span>
      </div>
      <div className="shareOption">
        <button className="button" onClick={addToCartClicked}>
          Add All To Cart
        </button>
      </div>
      <FlipMove>
        {menu.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Menu;
