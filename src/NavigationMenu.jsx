import {Link } from 'react-router-dom';
const NavigationMenu=()=>{
  return(
 <div style={{display:'flex'}}>
      <nav style={{ width: '200px', background: '#f4f4f4', padding: '10px' }}>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Items">Items</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
        <li><Link to="/Account">Account</Link></li>
      </ul>
      </nav>
</div>
  );
}
export default NavigationMenu;