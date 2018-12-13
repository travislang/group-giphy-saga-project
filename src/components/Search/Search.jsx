import React, { Component } from 'react';
import SearchForm from './SearchForm.jsx';
import SearchDisplay from './SearchDisplay.jsx';




class Search extends Component {

  render() {
    return (
      <div>
       <SearchForm />
       <SearchDisplay />
      </div>
    );
  }
}


export default Search;
