import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/">Harlem TrotterVerse</NavLink>
      <NavLink to="/players">
        <button>New Player</button>
      </NavLink>
    </nav>
  );
}

export default Nav;
