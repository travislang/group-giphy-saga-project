import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItem from '../Search/SearchItem.jsx';
import Grid from '@material-ui/core/Grid';

// this component will map thru the gifs in the reduxStore and pass them to the searchItem component
class SearchDisplay extends Component {

    render() {
        let gifItems = this.props.reduxStore.searchResults.map(gif => 
            < Grid item lg={3} key={gif.id}>
                <SearchItem  gif={gif} />
            </Grid >);
        return (
          <Grid 
            container
            direction='row'
            spacing={24}
            justify='center'
          >
            {gifItems}
          </Grid>
        );
      }
    }
    
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapReduxStateToProps)(SearchDisplay);
