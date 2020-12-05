import './App.css';
import React, {Component} from 'react'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionC from './components/functionClick';
import ClassC from './components/ClassClick'
import EventB from './components/EventBind'
import Parent from './components/ParentComponent'
import UserG from './components/UserGreeting'
import List from './components/NameList'
import Style from './components/Styleheets'
import  './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import Lifecycle from './components/LifecycleA'

class App extends Component {
  render() {
  return (
    <div className="App">
      <Lifecycle />
      {/* <Form /> */}
      {/* <h1 className='err'>Error</h1> */}
      {/* <h1 className={styles.success}>success</h1> */}
      {/* <List />
      <Style primary={true}/> */}
      {/* <UserG /> */}
      {/* <EventB /> */}
      {/* <Parent /> */}
      {/* <FunctionC></FunctionC> */}
      {/* <ClassC /> */}
     {/* <Greet name=" Sadeeq" adj="programmer"> */}
       {/* <p>this is the children props</p> */}
       {/* <h3>I am lazy today</h3></Greet> */}
     {/* <Greet name="Abubakar" adj="designer"/> */}
     {/* <Greet name="yusuf" adj="developer"/> */}
       {/* <Welcome /> */}
     {/* <Welcome name="yusuf" adj="developer"/>  */}
     {/* <Message/> */}
     {/* <Counter /> */}

    </div>
  );
   }
}

export default App;
