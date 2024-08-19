import {Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Increment from './Increment';
import Countries from './Countries';
import UserDetails from './UserDetails';
import LoginPage from './LoginPage';
import User from './User';
import UserList from './UserList';
import UserSearch from './userSearch';
import NavigationMenu from './NavigationMenu';
import Home  from './Home';
import Items from './Items';
import Cart from './cart'
import Account  from './Account';
// import NavandFetch from './NavandFetch';

function App() {
  return (
    <div>
      {/* <div>
        <Link to={"/"}>User List</Link><br/>
        <Link to={"/users/1"}>User View Page</Link>
      </div> */}
      <Routes>
        
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/Increment"  element={<Increment/>} />
          <Route path="/Countries" element={<Countries/>} />
          <Route path="/userDetails"element={<UserDetails/>} />
          <Route path="/LoginPage" element={<LoginPage/>} />
          <Route path="/user"  element={<User/>} />
          <Route path="/user/:userId" element={<UserList/>} />
          <Route path="/UserSearch"  element={<UserSearch/>} />
          <Route path="/NavigationMenu"  element={<NavigationMenu/>} />
          <Route path="/Home"  element={<Home/>} />
          <Route path="/Items"  element={<Items/>} />
          <Route path="/Cart"  element={<Cart/>} />
          <Route path="/Account"  element={<Account/>} />
          {/* <Route path="/NavandFetch"  element={<NavandFetch/>} /> */}

    </Routes>
    {/* <div><Outlet/></div> */}
          
    </div>
  );
}

export default App;