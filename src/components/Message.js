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
    const {message,tag} = this.state
    return  (
      <div>
        <h1>{message}</h1>
    <button onClick = {() => this.changeMessage()}>{tag}</button>
      </div>
    
    );
  };
};

export default Message;