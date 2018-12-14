import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItem from '../Search/SearchItem.jsx';

// this component will map thru the gifs in the reduxStore and pass them to the searchItem component
class SearchDisplay extends Component {

    render() {
        let gifItems = this.props.reduxStore.searchResults.map(gif => <SearchItem key={gif.id} gif={gif} />);
        return (
          <div>
            {gifItems}
          </div>
        );
      }
    }
    
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapReduxStateToProps)(SearchDisplay);
