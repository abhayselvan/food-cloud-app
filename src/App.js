import React, { useState, useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify, { Auth } from "aws-amplify";
import config from "./aws-exports";
import { Router } from "@reach/router";
import CustomerPage from "./Pages/CustomerPage";
import RestaurantPage from "./Pages/RestaurantPage";
import Menu from "./components/Menu";
import Home from "./Pages/Home";
import "./css/App.css";
import Cart from "./components/Cart";
import OrderPlaced from "./Pages/OrderPlaced";
import { CustomerContext } from "./util/CustomerContext";
import { getAmplifyUserAgent } from "@aws-amplify/core";
import UserInfo from "./UserInfo";
import OrderHistory from "./Pages/OrderHistory";

Amplify.configure(config);

function App() {
  const [userEmail, setUserEmail] = useState(null);
  const [restaurantName, setRestaurantName] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userInfo = await Auth.currentAuthenticatedUser();
      setUserEmail(userInfo.attributes.email);
      UserInfo.push(userInfo.attributes.email);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {userEmail && (
        <CustomerContext.Provider
          value={{ userEmail, restaurantName, setRestaurantName }}
        >
          <Router>
            <Home exact path="/" />
            <CustomerPage exact path="/customer" />
            <RestaurantPage exact path="/restaurant" />
            <Menu path="/restaurant/:id" />
            <Cart path="/cart" />
            <OrderHistory exact path="/orders" />
            <OrderPlaced path="/order-placed" />
          </Router>
        </CustomerContext.Provider>
      )}
    </div>
  );
}

export default withAuthenticator(App);
