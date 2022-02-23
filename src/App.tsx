import React, { useEffect, useState } from 'react';
import ListItem from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("http://localhost:3000").then((res) => {
      setUsers(res.data);
    })
  }, []);

  return (
    <div>
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default App;
