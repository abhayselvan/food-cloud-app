import React, { Component } from 'react';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Home.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      homeSearchBarText: "",
    }
    this.customerClicked = this.customerClicked(this);
  }

  customerClicked = () => {
    //window.location = '/customer';
  };

  render() {
    return (
      <div className="Homepage">
        <div className="Homepage_header">
            <FilterDramaIcon className="Homepage_icon"/>
        <span className="Homepage_header">Food Cloud</span>
        
      </div>
        <div className="home-cont1">
          <div className="">
          <div className="container home-cont1-text homeBottom homeOptions">
          <a href="/customer">
            <button className="Homepage_Button" onClick={this.customerClicked}>Customer</button> </a>
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
