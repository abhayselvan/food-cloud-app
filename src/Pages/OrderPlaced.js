import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import Header from "../components/Header";
import "../css/OrderPlaced.css";

function OrderPlaced(params) {
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      window.location.replace(window.origin);
    }
  }, []);

  return (
    <div>
      <Header />

      <div className="orderContainer">
        <div className="orderInside">
          <span className="success">Order Placed Successfully!</span>
          <div className="orderText">
            <span>User email : {location.state.userEmail}</span>
          </div>
          <div className="orderText">
            <span>Total Bill: ${location.state.totalBill}</span>
          </div>
          <div className="orderText">
            <span>Order ID : {location.state.orderId}</span>
          </div>
          <div className="orderText">
            <span>Order Date : {location.state.creationDate}</span>
          </div>
          <div className="orderText">
            <span>Restaurant Name: {location.state.restaurantName}</span>
          </div>
          <div className="orderText">
            <span>Order Status : {location.state.orderStatus}</span>
          </div>
          <hr className="shareHr" />
          {location.state.items.map((item) => {
            return (
              <div className="orderItems">
                <div className="orderItems">
                  <span>Item name : {item.name}</span>
                </div>
                <div className="orderItems">
                  <span>Item price : ${item.price}</span>
                </div>
                <div className="orderItems">
                  <span>Item quantity : {item.quantity}</span>
                </div>
                <div className="orderItems">
                  <span>Item Total : ${item.total}</span>
                </div>
                <hr className="shareHr" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderPlaced;
