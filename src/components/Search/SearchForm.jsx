import React, { Component } from 'react';
import { connect } from 'react-redux';




class SearchForm extends Component {


    getGifs = () => {
        console.log();
        this.props.dispatch({ type: 'FETCH_GIFS' });
    }




  render() {
    return (
     
      <span>
       <input />
       <button onClick={this.getGifs()}></button>
      </span>
      
    );
  }
  
}


export default connect()(SearchForm);
