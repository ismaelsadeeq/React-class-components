import React, { Component, component } from 'react';

class Welcome extends Component {
  render(){
    const {name,adj} = this.props;
    // const {state1,state2} = this.state
    return  <h1>well {name} is a {adj} and he is good</h1>
  }
}

export default Welcome;