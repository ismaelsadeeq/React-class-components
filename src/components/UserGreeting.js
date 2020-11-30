import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:false
    }
  }
  

  render() {



    let message;

    if (this.state.isLoggedIn){
      
      message =<div>Welcome Sadeeq</div>
      
    } else {
   
      message  = <div>Welcome Bako</div>  
  
    }

    if (this.state.isLoggedIn){
      return (
        <div>Welcome Sadeeq</div>
      )
    } else {
      return(
        <div>Welcome Bako</div>  
      )
    }

    // return (
    //   <div>
    //     <div>{message}</div>
    //   </div>
    // )

    // return (
    //   this.state.isLoggedIn ?(
    //   <div>Welcome Sadeeq</div> 
    //   ) : (
    //   <div>Welcome Guest</div>
    //   )
      
    // )
    // return this.state.isLoggedIn && <div>Welcome Sadeeq</div>
  }
}

export default UserGreeting
