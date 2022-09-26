import { useState } from 'react';

function TodoUser(props) {
    console.log(props);
  const [user, setUser] = useState(' ');
  const [items, setItems] = useState([]);

  const handleButton = (e) => {
    e.preventDefault();
    console.log(user,setUser);

    props.addUser(items, setItems);
    if (!user) {
    } else {
      setItems([...items, user]);
      setUser('');
    }

  };


  return (
    <>
      <div>
        <form onSubmit={handleButton}>
          <input
            type="text"
            value={user}
            name='add'
            onChange={(e) => setUser(e.target.value)}
          />
          <button>submit</button>
        </form>
      </div>

      
    </>
  );
}

export default TodoUser;
