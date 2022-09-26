import React, { useState } from 'react';
// import ConditionalStat from './Components/ConditionalStat';

import './App.css';
import TodoList from './Components/TodoList';
import TodoUser from './Components/TodoUser';


function App() {

  const [userList , setUser] = useState('');

  const handleButton = (user) =>{
    setUser((prevUser)=> {
      return [...prevUser, {name : user}]
    });

  }

  return (
    <div className="App">
      <TodoUser addUser={handleButton}/>
      <TodoList  user = {userList}/>
      
    </div>
  );
}

export default App;
