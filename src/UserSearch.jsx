
import  { useState, useEffect } from 'react';
import './App.css'
const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

 
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

 

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={handleSearchChange}
      />
     
      <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
         
        </tr>
      </thead>
      <tbody>
      
      { filteredUsers.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          
     
          
        </tr>
      ))}
    </tbody>
    </table>
    </div>
  );
};

export default UserSearch;
