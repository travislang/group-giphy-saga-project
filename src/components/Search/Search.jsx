import React, { Component } from 'react';
import SearchDisplay from './SearchDisplay.jsx';

// This component will call the searchDisplay Component 
class Search extends Component {

  render() {
    return (
      <div>
       <SearchDisplay />
      </div>
    );
  }
}


export default Search;
