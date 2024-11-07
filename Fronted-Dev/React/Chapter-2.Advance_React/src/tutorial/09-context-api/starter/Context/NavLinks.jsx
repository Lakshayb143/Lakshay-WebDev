import React from "react";
import UserComponent from "./UserComponent";

const NavLinks = () => {
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
      <UserComponent />
    </div>
  );
};

export default NavLinks;
