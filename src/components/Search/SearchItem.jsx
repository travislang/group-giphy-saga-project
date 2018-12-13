import React, { Component } from 'react';
import { connect } from 'react-redux';




class SearchItem extends Component {

    clickHandler = () => {
        console.log('clicked')
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: this.props.gif })
    }

    render() {
        return (
            <div>
                <img src={this.props.gif.image_url} alt="" />
                <button onClick={this.clickHandler}>Favorite</button>
            </div>
        );
    }
}


export default connect()(SearchItem);
