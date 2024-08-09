import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

 function User() {
  const[value,setValue]=useState([])

  useEffect(()=>{
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>setValue(data))
    .catch(err=>console.log(err))

  },[])

  

  return (
    <div>
     <ul>
        {value.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
  </div>
  )
}
export default User;
