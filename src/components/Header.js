import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>BlogApp</div>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/blogs" activeClassName="active">
        Blogs
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </header>
  );
};

export default Header;
