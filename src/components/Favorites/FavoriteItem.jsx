import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteItem extends Component {

  state = {
    category: ''
  }

  handleChange = (event) => {
    this.setState({
      category: event.target.value,
    });
  }

  handleClick = () => {
    this.props.dispatch({ type: 'ADD_CATEGORY', payload: this.state })
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CATEGORIES' });
  }

  render() {
    // individual favorite object, given via props
    let favorite = this.props.favorite;

    // array of categories, given via redux
    let categories = this.props.categories
    // map through categories, create option for each
    // let categoryHtml = categories.map((category, i) => {
    //   return <option key={i} value={category}>{category}</option>
    // });

    return (
      <div>
        <img src={favorite.image_url} alt="favorite gif" />
        <select onChange={this.handleChange}>
          {/* {categoryHtml} */}
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
