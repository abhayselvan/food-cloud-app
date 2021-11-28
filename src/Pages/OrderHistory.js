import React, { useState, useEffect, useContext } from "react";
import Amplify, { API } from "aws-amplify";
import config from "../aws-exports";
import UserInfo from "../UserInfo";
import { CustomerContext } from "../util/CustomerContext";
Amplify.configure(config);

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const { userEmail } = useContext(CustomerContext);
  const { page, setPage } = useState("orders");

  useEffect(() => {
    // async function fetchData() {
    //   console.log(userEmail);
    //   const fetchedOrders = await API.get(
    //     "ordersapi",
    //     "/orders/" + "arthikdk@gmail.com"
    //   );
    //   const data = await fetchedOrders;
    //   console.log(data);
    //   setOrders(data);
    //   console.log(orders);
    // }
    // fetchData();
    API.get("ordersapi", "/orders/" + "arthikdk@gmail.com")
      .then((res) => setOrders(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(orders);

  return (
    <div>
      <ul>
        {orders.map((order, i) => {
          return <li key={i}>{order.restaurantName}</li>;
        })}
      </ul>
    </div>
  );
}

export default OrderHistory;
