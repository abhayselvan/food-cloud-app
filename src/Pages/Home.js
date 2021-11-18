import React, { Component } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Homepage">
        <Header />
        <div className="home-cont1">
          <div className="">
            <div className="container home-cont1-text homeBottom homeOptions">
              <a href="/customer">
                <button className="Homepage_Button">Customer</button>{" "}
              </a>
              <a href="/restaurant">
                <button className="Homepage_Button">Restaurant</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
