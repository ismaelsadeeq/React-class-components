import './App.css';
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
function App() {
  return (
    <div className="App">
      {/* <List /> */}
      <Style primary={true}/>
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

export default App;
