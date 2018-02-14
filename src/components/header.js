import React from "react";
import logo from "../eventbrite-logo.png";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo " alt="logo" />
      <p className="App-title ">
        Event Search <span className="powered">powered by</span>
        <span className="eb-orange-text"> Eventbrite</span>
      </p>
    </header>
  );
};

export default Header;
