import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

function OrderPlaced(params) {
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      window.location.replace(window.origin);
    }
  }, []);

  return (
    <div>
      <h1>Order Placed Successfully!</h1>
      <h4>User email: {location.state.userEmail}</h4>
      <h4>Total Bill: {location.state.totalBill}</h4>
      <h4>Order ID: {location.state.orderId}</h4>
      <h4>Order Date: {location.state.creationDate}</h4>
      <h4>Restaurant ID: {location.state.restaurantId}</h4>
      <h4>Restaurant Name: {location.state.restaurantName}</h4>
      <h4>Order Status: {location.state.orderStatus}</h4>
      {location.state.items.map((item) => {
        return (
          <div>
            <h4>Item name: {item.name}</h4>
            <h4>Item price: {item.price}</h4>
            <h4>Item quantity: {item.quantity}</h4>
            <h4>Item Total: {item.total}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default OrderPlaced;
