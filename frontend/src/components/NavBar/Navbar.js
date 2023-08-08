import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/user-trotter">
        <button>Create-A-Trotter</button>
      </NavLink>
    </nav>
  );
}

export default Nav;
