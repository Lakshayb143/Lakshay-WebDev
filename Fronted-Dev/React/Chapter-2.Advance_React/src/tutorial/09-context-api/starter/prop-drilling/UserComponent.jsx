import React from 'react'

const UserComponent = ({ user, logout}) => {
  return (
    <div className="user-container">
      <h2>
        {user ? (
          <>
            <p>Hello there, {user?.name}</p>
            <button className="btn" onClick={logout}>
              Log Out
            </button>
          </>
        ) : (
          <p>Please Login</p>
        )}
      </h2>
    </div>
  );
}

export default UserComponent