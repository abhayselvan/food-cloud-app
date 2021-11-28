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

import { getAmplifyUserAgent } from "@aws-amplify/core";
import UserInfo from "./UserInfo";
import OrderHistory from "./Pages/OrderHistory";

Amplify.configure(config);

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <CustomerPage path="/customer" />
        <RestaurantPage path="/restaurant" />
        <Menu path="/restaurant/:id" />
        <Cart path="/cart" />
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
