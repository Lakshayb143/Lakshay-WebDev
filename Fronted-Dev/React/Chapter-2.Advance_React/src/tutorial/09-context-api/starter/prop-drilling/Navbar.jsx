import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = React.useState({ name: "Andrew" });

  const logout = () => setUser(null);

  return (
    <nav className="navbar">
      <h4>Context API</h4>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};

export default Navbar;
