 import React, { Component } from 'react'
 import Child from './ChildComponent';
 
 class ParentComponent extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
       parentName:'Abba'
    }
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName){
    alert(`hello ${this.state.parentName} from  ${childName}`)
  };
  
  
  render() {
     return (
       <div>
         <Child greetHandler ={this.greetParent}/>
       </div>
     )
   }
 }
 
 export default ParentComponent;
  