import React, { Component } from 'react';
import SearchDisplay from './SearchDisplay.jsx';




class Search extends Component {

  render() {
    return (
      <div>
        <h2>Search Results:</h2>
       <SearchDisplay />
      </div>
    );
  }
}


export default Search;
