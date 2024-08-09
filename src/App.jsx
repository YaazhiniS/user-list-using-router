import { Outlet, Route, Routes } from 'react-router-dom';
import User from './User';
import UserList from './UserList';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" exact element={<User/>} />
          <Route path="/users/:userId" element={<UserList/>} />
    </Routes>
          <Outlet/>
    </div>
  );
}

export default App;