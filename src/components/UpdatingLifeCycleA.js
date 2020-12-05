import React, { Component } from 'react'
// import LifecycleB from './LifecycleB'

class UpdatingLifecycleA extends Component {
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
  }
   
  render() {
    console.log('Life cycle render')
    return (
      <div>
        <LifecycleB></LifecycleB>
        <div>
        UpdatingLifecycleA 
      </div>
      </div>
     
    )
  }
}

export default UpdatingLifecycleA
