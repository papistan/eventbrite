import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import './App.css';

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
    console.log(city)
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
      </div>
    );
  }
}

export default App;
