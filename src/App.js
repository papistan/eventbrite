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
      saturday: []
    };
    this.citySearch = this.citySearch.bind(this);
    // this.citySearch('San Francisco');
  }

  componentWillMount() {
    this.citySearch('San Francisco')
  }

  citySearch(city = "", keyword = "") {
   const token = '3TN4ED2N6RJDUIVXUQWY';
   let cityField = city;
   let keywords = keyword

   if(cityField === "") {
      cityField = "San Francisco"
    } 

    if(keyword === "") {
      keywords = "today"
    }

   // let price = " " || "&price=free";
   let searchQuery = `https://www.eventbriteapi.com/v3/events/search/?token=${token}&expand=venue&location.within=1mi&location.address=${cityField}&sort_by=best&start_date.keyword=${keywords}`;
   console.log(searchQuery)
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
            onSearchTermChange={(term, keyword) => this.citySearch(term, keyword)}
          />
          <WeekendSearch
            satEvents={this.state.saturday}
          />
        </div>
      );
    }
  }
}

export default App;
