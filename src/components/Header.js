import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav">
      <Link to="/" ><p>Home</p></Link>
      <Link to="/login" ><p>Login</p></Link>
      <Link to="/signup" ><p>Sign up</p></Link>
      <Link to="/users" ><p>User</p></Link>
    </div>
  );
};

export default Header;
