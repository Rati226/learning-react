import React, { useState } from 'react';


import './App.css';
import TodoList from './Components/TodoList';
import TodoUser from './Components/TodoUser';



function App() {

 const [item,setItems] = useState([]);

 const handleChange = (user)=>{
  setItems((prevUser)=>{
    return [...prevUser,{name:user, id:Math.random().toString()}]
  })
 }
  return (
    <div className="App">
     <TodoUser adduserHandle = {handleChange}/>
    <TodoList items = {item}/>


    </div>
  );
}

export default App;
