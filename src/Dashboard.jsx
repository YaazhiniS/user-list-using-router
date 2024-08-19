import { useNavigate } from "react-router-dom";

export default function Dashboard(){
  const navigate=useNavigate();
  return(
    <>
    <ol>
    {/* <li style={{padding:'10px'}}><button onClick={() => navigate("/Increment")}>Increment/Decrement-Assignment 1</button></li>
    <li style={{padding:'10px'}}><button  onClick={() => navigate('/Countries')} >Countries Api-Assignment 2</button></li> */}
    <li style={{padding:'10px'}}><button  onClick={() => navigate('/userDetails')}>Assignment 1-UserDetails</button></li>
    <li style={{padding:'10px'}}><button  onClick={() => navigate('/user')}>Assignment 2-User to UserList</button></li>
    <li style={{padding:'10px'}}><button  onClick={() => navigate('/userSearch')}>Assignment 3-User Search</button></li>
    <li style={{padding:'10px'}}><button  onClick={() => navigate('/LoginPage')}>Assignment 4-Login Page</button> </li>
    <li style={{padding:'10px'}}><button onClick={()=>navigate('/NavigationMenu')}>Assignment 5-NavigationMenu</button></li>
    <li style={{padding:'10px'}}><button onClick={()=>navigate('/NavandFetch')}>Assignment 5-NavandFetch</button></li>
    </ol>
    </>
    
  )
}