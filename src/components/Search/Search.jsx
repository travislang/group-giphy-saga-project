import React, { Component } from 'react';
import SearchItem from '../Search/SearchItem.jsx';
import SearchDisplay from '../Search/SearchDisplay.jsx';




class Search extends Component {

  render() {
    return (
     
      <div>
       <SearchItem />
       <SearchDisplay />
      </div>
      
    );
  }
  
}


export default Search;
