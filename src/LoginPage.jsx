import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
  if (username === 'yaazh@gmail.com' && password === 'yaazh123') {
      navigate('/user');
    } else {
      alert('Invalid username or password');
    }
  };
 return(
 <>
 <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
 <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
 <button onClick={handleLogin}>Login</button>
 </>
 );
 }
export default LoginPage;