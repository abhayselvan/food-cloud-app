import React, { useState, useEffect, useContext } from "react";
import Amplify, { API } from "aws-amplify";
import config from "../aws-exports";
import Header from "../components/Header";
import { CustomerContext } from "../util/CustomerContext";
import "../css/OrderHistory.css"

Amplify.configure(config);

function OrderHistory() {
  const [orders, setOrders] = useState(null);
  const { userEmail } = useContext(CustomerContext);

  useEffect(() => {
    console.log(userEmail);
    API.get("ordersapi", "/orders/" + userEmail)
      .then((res) => setOrders(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(orders);

  return (
    <div>
      <Header />
      {orders && (
        <ul>
          {orders.map((order) => {
            return (
              <div className="OrderHistory">
              <div key={order.orderId}>
                <div className="orderId">
                <span>Order ID: {order.orderId}</span>
                </div>
                <div className="orderText">
                <span>Restaurant Name : {order.restaurantName}</span>
                </div>
                <div className="orderText">
                <span>Creation Date : {order.creationDate}</span>
                </div>
                <div className="orderText">
                <span>Total Bill : ${order.totalBill}</span>
                </div>
                {order.items.map((item) => {
                  return (
                    <div className="orderItems" key={item.id}>
                      <p className="item">Item {item.id}</p>
                      <ul>
                        <li>Item Name: {item.name}</li>
                        <li>Item Price: {item.price}</li>
                        <li>Item Quantity: {item.quantity}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
