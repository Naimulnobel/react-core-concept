import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My firt react</p>
        <Person name="rubel"/>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle= {
    border:'2px solid red', 
    margin:'10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
    </div>
  )
}

export default App;
