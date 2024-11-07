
import { useState } from 'react';

const UserChallenge = () => {

  const [ user, setUser ] = useState(null);

  const login = () => {
    setUser({ name : "Lakshay"});
  }

  const logout = () => {
    setUser(null);
  }


  return <div>
    { user ? 
      <div>
        <h4>Hello there, {user.name}</h4>
        <button className="btn" onClick={logout}>Log out</button>
      </div> : <div>
        <h4>Please Login</h4>
        <button className="btn" onClick={login}>Login</button>
      </div> }
  </div>;
};

export default UserChallenge;
