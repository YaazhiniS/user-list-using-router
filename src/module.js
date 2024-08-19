<table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        {value.map((user, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><button onClick={() => console.log(user)}>click me</button></td>
          </tr>
          <td><button onClick={() =>navigate(`/user/${user.id}`)}>click me</button></td>
        ))}
      </tbody>
    </table>
    {/* <button onClick={filteredUsers}> Search</button> */}
       {/* <ul>
        {filteredUsers.map(value => (
          <li key={value.id}>
            <Link to={`/user/${value.id}`}>{value.name}</Link>
          </li>
        ))}
      </ul> */}

      { filteredUsers.map(user => (
        <tr key={user.id}>
          <td>{user.id+1}</td>
          <td>{user.name}</td>
          <td><button onClick={() => handleClick(user.id)}>click me</button></td>
     
          
        </tr>
      ))}
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