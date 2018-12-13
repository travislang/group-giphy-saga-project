import React, { Component } from 'react';
import { connect } from 'react-redux';




class SearchForm extends Component {

    state ={ 
        search: ''
    }

    getGifs = () => {
        console.log();
        this.props.dispatch({ type: 'FETCH_GIFS', payload: this.state.search});
    }

    handleChangeFor = (event) => {
        this.setState({
            search: event.target.value
        })
    }

  render() {
    return (
     
      <span>
       <input onChange={this.handleChangeFor}/>
       <button onClick={this.getGifs()}>Search</button>
      </span>
      
    );
  }
  
}


export default connect()(SearchForm);
