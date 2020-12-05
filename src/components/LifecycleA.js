import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Sadeeq"
    }
    console.log('life cycle construtor')
  }
  static getDerivedStateFromProps(props,state){
    
    console.log('life cycle getDerivedStateFromProps')
    return null
  }
  componentDidMount(){
    console.log('life cycle component did mount');
  }
  shouldComponentUpdate(){
    console.log('Should component update');
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Life Cycle did update');
    return null  
  }
  componentDidUpdate(){
    console.log('life cycle did update');
  } 
  changeState = ()=>{
    this.setState({
      name:"Abubakar Sadeeq "
    })
  }
  
   
  render() {
    console.log('Life cycle render')
    return (
      <div>
        <div>
          <div> LifecycleA </div>
          <button onClick={this.changeState}>change state</button>
          <LifecycleB></LifecycleB>
      </div>
      </div>
     
    )
  }
}

export default LifecycleA
