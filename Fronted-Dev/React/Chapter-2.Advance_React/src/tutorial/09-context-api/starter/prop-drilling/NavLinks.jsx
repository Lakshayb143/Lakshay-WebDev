import React from "react";
import UserComponent from "./UserComponent";

const NavLinks = ({ user, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserComponent user={user} logout={logout} />
    </div>
  );
};

export default NavLinks;
