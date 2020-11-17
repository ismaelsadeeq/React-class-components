import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     {/* <Greet name=" Sadeeq" adj="programmer">
       <p>this is the children props</p>
       <h3>I am lazy today</h3></Greet>
     <Greet name="Abubakar" adj="designer"/>
     <Greet name="yusuf" adj="developer"/>

     <Welcome name="yusuf" adj="developer"/>  */}
     {/* <Message/> */}
     <Counter />
    </div>
  );
}

export default App;
