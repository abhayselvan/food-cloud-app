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

import { getAmplifyUserAgent } from "@aws-amplify/core";
import UserInfo from "./UserInfo";

Amplify.configure(config);

function App() {
  const [userInfo, setUserInfo] = useState({});

  // useEffect(() => {
  //   Auth.currentAuthenticatedUser({
  //     bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  //   })
  //     .then((user) => console.log(user))
  //     .then((user) => {
  //       UserInfo.push(user.attributes.email);
  //       setUserInfo(user.attributes.email);
  //       console.log(userInfo);
  //       console.log(UserInfo);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  let user;
  useEffect( async () => {
    user = await Auth.currentAuthenticatedUser();
    console.log(user.attributes.email);
    UserInfo.push(user.attributes.email);
  })


  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <CustomerPage path="/customer" />
        <RestaurantPage path="/restaurant" />
        <Menu path="/restaurant/:id" />
        <Cart path="/cart" />
        <OrderPlaced path="/order-placed" />
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
