import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
      </div>
    );
  }
}



export default withRouter(Navbar);
