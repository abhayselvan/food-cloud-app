import React, { useState, useEffect, useContext } from "react";
import Amplify, { API } from "aws-amplify";
import config from "../aws-exports";
import UserInfo from "../UserInfo";
import { CustomerContext } from "../util/CustomerContext";
import { Link } from "@reach/router";
Amplify.configure(config);

function OrderHistory() {
  const [orders, setOrders] = useState(null);
  const { userEmail } = useContext(CustomerContext);
  const { page, setPage } = useState("orders");

  useEffect(() => {
    console.log(userEmail);
    API.get("ordersapi", "/orders/" + userEmail)
      .then((res) => setOrders(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(orders);

  return (
    <div>
      {orders && (
        <ul>
          {orders.map((order) => {
            return (
              <div key={order.orderId}>
                <h3>Order ID: {order.orderId}</h3>
                <p>Restaurant Name: {order.restaurantName}</p>
                <p>Creation Date: {order.creationDate}</p>
                <p>Total Bill: {order.totalBill}</p>
                {order.items.map((item) => {
                  return (
                    <div key={item.id}>
                      <p>Item {item.id}</p>
                      <ul>
                        <li>Item Name: {item.name}</li>
                        <li>Item Price: {item.price}</li>
                        <li>Item Quantity: {item.quantity}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
