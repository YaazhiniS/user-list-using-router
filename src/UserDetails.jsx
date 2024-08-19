
import  { useState, useEffect } from 'react';

import './App.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data)) 
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
