import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[{name:'Photoshop',price:'$90.00'},
  {name:'PDF Reader',price:'$90.00'},
  {name:'Primier Pro',price:'$90.00'},
]
  return (
    <div className="App">
      <header className="App-header">
      <Counter/>
      <Users/>
        <p>My firt react</p>
        <Person name="rubel"/>
        {products.map(product =><Product products={product}></Product>)}
        
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
function Users(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then((data)=>setUsers(data))
  },[])
  return (
    <div>
      
      <h3>Dynamic Users{users.length}</h3>
      <ul>
        {
           users.map((user)=><li key={user.id}>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle= {
    border:'1px solid gray',
    borderRadius:'5px',
    height:'200px',
    width:'200px',
    float:'left',
    background:'lightgray',
    
  }
  const {name,price}=props.products
  return (
    <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Me</button>
    </div>
  )
}
function Counter(){
  const [count,setState]=useState(0)
  const handleAdd=()=>{
    setState(count+1)
  }
  const handleSub=()=>setState(count-1);
  return(
    <div>  
      <h1>Count:{count}</h1>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSub}>-1</button>
    </div> 
  )
}

export default App;
