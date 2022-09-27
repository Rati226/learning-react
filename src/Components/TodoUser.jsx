
import React, { useState } from 'react'

const TodoUser =(props) => {
    console.log(props);

const [user , setUser] = useState("");
const [items , setItems] = useState([]);

const handleChange = (e) =>{
     e.preventDefault();
     props.adduserHandle(user,setUser);
     if(!user)
     return ;
   
    else{
    setItems([...items , user]);   
     }
     setUser('');
}

  return (
    <>
        <div>
            <form onSubmit={handleChange}>
                <input type='text' name='user' value={user} onChange={(e)=>setUser(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default TodoUser;
