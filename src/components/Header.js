import React from "react";
import history from '../utils/history';

const Header = () => {

  const pushHome = () => {
    history.push('/');
  }

  const pushRoute = location => {
    history.push(`/${location}`);
  }

  return (
    <div className="nav">
      <a onClick={pushHome}>Home</a>
      <a onClick={()=>pushRoute('login')}>Login</a>
      <a onClick={()=>pushRoute('signup')}>Sign up</a>
      <a onClick={()=>pushRoute('users')}>User</a>
    </div>
  );
};

export default Header;
