import React, { Component, component } from 'react';

class Message extends Component {

  constructor(){
    super()
    this.state = {
      message : 'Welcome visitor',
      tag:'subscribe'
    };
  };

  changeMessage () {
    this.setState({
      message:'Thank you for subscribing',
      tag:'usubscribe'
    })
  }

  render(){
    return  (
      <div>
        <h1>{this.state.message}</h1>
    <button onClick = {() => this.changeMessage()}>{this.state.tag}</button>
      </div>
    
    );
  };
};

export default Message;