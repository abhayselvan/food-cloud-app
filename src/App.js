import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "aws-amplify";

function App() {
  async function callApi() {
    try {
      const restaurantData = await API.get("restaurants", "/restaurants");
      console.log("Restaurant list", restaurantData);
    } catch (err) {
      console.log({ err });
    }
  }
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="App">
      <h1>Hello from foodcloud</h1>
    </div>
  );
}

export default App;
