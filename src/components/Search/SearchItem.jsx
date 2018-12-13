import React, { Component } from 'react';
import { connect } from 'react-redux';




class SearchItem extends Component {

  render() {
    return (
      <div>
        <img src={this.props.gif.image_url} alt=""/>
        
      </div>
    );
  }
}


export default connect()(SearchItem);
