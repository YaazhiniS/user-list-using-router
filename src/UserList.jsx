import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import './App.css'

 function List() {
  const { userId } = useParams();
  const[value,setValue]=useState([]);
  const {name, email, username, phone} = value;

  useEffect(()=>{
    fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)
    
    .then(response=>response.json())
    .then(data=>setValue(data))
    .catch(err=>console.log(err))

  },[])

  return (
    <div>
      <h2>User Details</h2>
      
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Username: {username}</p>
          <p>Phone: {phone}</p>
          
        </div>
    </div> 
    
      
  )
}
export default List;
