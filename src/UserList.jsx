import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserList() {
  const { userId } = useParams(); 
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  // console.log('user', user)/

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {setUser(data); setLoading(false);})
      .catch(error => console.error('Error fetching user details:', error));
  }, [userId]);


  return (
    <div>
      {loading ? <p>Loading</p> : <><h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p></>}
      
      
    </div>
  );
};

