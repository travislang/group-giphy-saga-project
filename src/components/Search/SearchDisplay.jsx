import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItem from '../Search/SearchItem.jsx';


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
