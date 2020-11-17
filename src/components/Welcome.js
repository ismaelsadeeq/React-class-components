import React, { Component, component } from 'react';

class Welcome extends Component {
  render(){
    return  <h1>well {this.props.name} is a {this.props.adj} and he is good</h1>
  }
}

export default Welcome;