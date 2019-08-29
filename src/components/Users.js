import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Users = props => {
  console.log('props from Users:', props)
  return (
    <div>
      <h2>User page - dashboard</h2>
      <h3>Hello, user (will be username)</h3>
      <Link to="new-project"><Button style={{backgroundColor: "#40367C", color: "white"}}>Start projects</Button></Link>
      <Link to="/"><Button style={{backgroundColor: "#49C1A7", color: "white"}}>Discover projects</Button></Link>
    </div>
  );
};

export default Users;