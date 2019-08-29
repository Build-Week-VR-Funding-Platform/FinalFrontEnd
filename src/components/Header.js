import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav">
      <Link to="/" activeClassName="activeNavButton"><p>Home</p></Link>
      <Link to="/login" activeClassName="activeNavButton"><p>Login</p></Link>
      <Link to="/signup" activeClassName="activeNavButton"><p>Sign up</p></Link>
      <Link to="/users" activeClassName="activeNavButton"><p>User</p></Link>
    </div>
  );
};

export default Header;
