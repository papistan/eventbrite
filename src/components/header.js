import React from 'react';
import logo from '../eventbrite-logo.png';

const Header = () => {
    return (
    	<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Free Events in East Bay</h1>
          <p className="header-subtitle"> Powered by <span className="eb-orange-text">Eventbrite</span></p>
      </header>
    )
}

export default Header;