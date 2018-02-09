import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import WeekendSearch from './components/weekendSearch';
import './App.css';


var dotenv = require('dotenv');
dotenv.load();

let API = process.env.API_KEY;

console.log("This is API" + API);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      saturday: [],
      sunday: []
    };

    this.citySearch('San Francisco');
  }

  citySearch(city) {
    // const API_KEY = API_KEY;
  

    // headers Authorization: Bearer API_KEY

    let saturday = "API_CALLfree + city"
    let sunday = ""

    this.setState({ saturday, sunday })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Search
          onSearchTermChange={term => this.citySearch(term)}
        />
        <WeekendSearch
          satEvents={this.state.saturday}
          sunEvents={this.state.sunday}
        />
      </div>
    );
  }
}

export default App;
