import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchDisplay extends Component {

    render() {
        let gifItems;
        gifItems = this.props.reduxStore.searchResults.map((gifs, i) => {
          return ( <div key={gifs.id}>
          <div>{gifs.name}</div>
          </div>
        )})
    
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
