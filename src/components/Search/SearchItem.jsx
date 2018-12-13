import React, { Component } from 'react';
import { connect } from 'react-redux';




class SearchItem extends Component {

    clickHandler = () => {
        console.log('clicked')
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: this.props.gif.images.original.url })
    }

    render() {
        return (
            <div>
                <img src={this.props.gif.images.original.url} alt="" />
                <button onClick={this.clickHandler}>Add Favorite</button>
            </div>
        );
    }
}


export default connect()(SearchItem);
