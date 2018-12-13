import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search.jsx';
import Favorites from '../Favorites/Favorites';




class App extends Component {

  render() {
    return (
      <Router>
      <div>
        {/* <Navbar /> */}
        <Route path='/' exact component={Search}/>
        {/* <Route path='/favorites' component={Favorites} /> */}
      </div>
      </Router>
    );
  }
  
}

export default App;
