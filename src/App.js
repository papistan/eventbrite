import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import WeekendSearch from './components/weekendSearch';
import axios from 'axios';
import './App.css';


var dotenv = require('dotenv');
dotenv.load();

// let API = process.env.API_KEY;

// console.log("This is API" + API);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      saturday: [],
      sunday: []
    };
    this.citySearch = this.citySearch.bind(this);
    // this.citySearch('San Francisco');
  }

  componentWillMount() {
    this.citySearch('San Francisco')
  }

  citySearch(city) {
   const token = '';
   let cityField = city;
   let price = " " || "&price=free";
   let searchQuery = `https://www.eventbriteapi.com/v3/events/search/?token=${token}&expand=venue&location.within=1mi&location.address=${cityField}&sort_by=best${price}`;
    const self = this;
    axios.get(searchQuery)
      .then((data) => {
        self.setState({
          saturday: data.data.events,
          sunday: data.data.events
        })
      }).catch((error) => {
       console.log(error);
      });
  }


  render() {
    
    if(this.state.saturday[0] === undefined) {
      return (
        <div className="App">
          <Header />
          <Search
            onSearchTermChange={term => this.citySearch(term)}
          />
        </div>
      )
    } else { 
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
}

export default App;
