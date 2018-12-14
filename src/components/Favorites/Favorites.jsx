import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteItem from './FavoriteItem';
import Test from './FavoriteItemForm';

class Favorites extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_FAVORITES' });
  }

  render() {
    let favoritesHtml = this.props.favorites.map(favorite => <FavoriteItem key={favorite.id} favorite={favorite} />);
    return (
      <div>
        {favoritesHtml}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  favorites: reduxState.favoriteList,
});

export default connect(mapStateToProps)(Favorites);
