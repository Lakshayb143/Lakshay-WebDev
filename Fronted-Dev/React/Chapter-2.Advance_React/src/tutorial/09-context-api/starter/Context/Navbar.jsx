import React from "react";

import { createContext , useContext} from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

// custom Hook

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = React.useState({ name: "Xander" });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{user,logout}}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
