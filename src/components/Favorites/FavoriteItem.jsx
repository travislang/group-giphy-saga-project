import React, { Component } from 'react';
import FavoriteItemForm from './FavoriteItemForm';

class FavoriteItem extends Component {

  render() {
    return (
      <div>
        <img src={this.props.favorite.image_url} alt="favorite gif" />
        <FavoriteItemForm />
      </div>
    );
  }
}

export default FavoriteItem;
