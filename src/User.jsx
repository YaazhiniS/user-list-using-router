
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

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

  const handleClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={handleSearchChange}
      />
      {/* <ul>
        {filteredUsers.map(user => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.name}
          </li>
        ))}
      </ul> */}
      <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
      
      { filteredUsers.map(user => (
        <tr key={user.id}>
          <td>{user.id+1}</td>
          <td>{user.name}</td>
          <td><button onClick={() => handleClick(user.id)}>click me</button></td>
     
          
        </tr>
      ))}
    </tbody>
    </table>
    </div>
  );
};

export default UserList;
