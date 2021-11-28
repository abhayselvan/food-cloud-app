import React, { Component } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Home.css";
import { Link } from "@reach/router";

class Home extends Component {
  render() {
    return (
      <div className="Homepage">
        <Header />
        <div className="home-cont1">
          <div className="">
            <div className="container home-cont1-text homeBottom homeOptions">
              <Link to="/customer">
                <button className="Homepage_Button">Customer</button>{" "}
              </Link>
              <Link to="/restaurant">
                <button className="Homepage_Button">Restaurant</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
