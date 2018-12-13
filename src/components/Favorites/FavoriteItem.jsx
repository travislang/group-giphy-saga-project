import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteItem extends Component {

  state = {
    category: ''
  }

  handleClick = () => {
    this.props.dispatch({ type: 'ADD_CATEGORY', payload: this.state})
  }

  render() {
    // individual favorite object, given via props
    // let favorite = this.props.favorite;
    let favorite = {
      image_url: "https://media0.giphy.com/media/1d5Tfv7yEy2tSztA5k/giphy.webp",
      category: 'funny'
    }
    // array of categories, given via redux
    // let categories = this.props.categories
    let categories = ['funny', 'nsfw']
    // map through categories, create option for each
    let categoryHtml = categories.map( (category, i) => {
      return <option key={i} value={category}>{category}</option>
    });

    return (
      <div>
        <img src={favorite.image_url} alt="favorite gif" />
        <select>
          {categoryHtml}
        </select>
        <button>Add Category</button>
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  categories: reduxState.categoryList,
});

export default connect(mapStateToProps)(FavoriteItem);
