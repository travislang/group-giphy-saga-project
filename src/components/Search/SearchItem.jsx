import React, { Component } from 'react';
import { connect } from 'react-redux';




class SearchItem extends Component {

    clickHandler = () => {
        console.log('clicked')
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: { image_url: this.props.gif.images.original.url} })
    }

    render() {
        return (
            <span>
                <img src={this.props.gif.images.original.url} alt="" />
                <button onClick={this.clickHandler}>Add Favorite</button>
            </span>
        );
    }
}


export default connect()(SearchItem);
