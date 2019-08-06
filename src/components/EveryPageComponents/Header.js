import React, { Component } from 'react';

class Header extends Component {
  state = {
    user: "weegembump"
  }
  render() {
    return (
      <div>
        <h1 className='header'>
          NC Hughes News
      </h1>
        <p>Logged in as: {this.state.user}</p>
      </div>
    );
  }
}

export default Header;

