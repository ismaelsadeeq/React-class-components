import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Sadeeq"
    }
    console.log('life cycleB construtor')
  }
  static getDerivedStateFromProps(props,state){
    
    console.log('life cycleB getDerivedStateFromProps')
    return null
  }
  componentDidMount(){
    console.log('life cycleB component did mount');
  }
  componentDidMount(){
    console.log('life cycle component did mount');
  }
  shouldComponentUpdate(){
    console.log('Life cycle B Should component update');
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Life CycleB did get ssnaptiot before update');
    return null  
  }
  componentDidUpdate(){
    console.log('life cycleB  did update');
  }
  
   
  render() {
    console.log('Life cycleB render')
    return (
      <div>
        LifecycleB 
      </div>
    )
  }
}

export default LifecycleB
