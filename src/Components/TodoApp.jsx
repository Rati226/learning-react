import React from 'react';
import { useState } from 'react';
import Value from './Value'

function TodoApp() {
  const [user, setUser] = useState(' ');
  const [items, setItems] = useState([]);

  const handleButton = (e) => {
     e.preventDefault();
    if(!user){}
   else{
    setItems([...items, user]);
    setUser('');
   }
  };

  const onDelete =(a) =>{
    const finalData = items.filter((curr,index)=>{
      return index !== a ;
    })
    setItems(finalData);
  }

  return (
    <>
      <div>
        <form onSubmit={handleButton}>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button>submit</button>
        </form>
      </div>

      <div>
        {
          items.map((value,index) => { return(
            <Value key={index} id = {index} task = {value} onSelect = {onDelete}/>
          )})
        }
      </div>
    </>
  );
}

export default TodoApp;
