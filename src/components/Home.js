import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from "semantic-ui-react";

import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ProjectCard from "./ProjectCard";

const Home = () => {

  const [projects, setProjects] = useState([])
  const [user, setUser] = useState([])
  useEffect(() => {
    axios
      .get('https://vr-funding-app.herokuapp.com/api/projects/public')
      .then(res => {
        console.log('getting public open data: ', res);
        setProjects(res.data.project)//check res.data
      })
      .catch(err => console.log(err.response))
  }, []);


  return (
    <div className="home-container">
      <div className="btn-container">
        <Link to="/login"><Button style={{backgroundColor: "#40367C", color: "white"}}>Founder - Login</Button></Link>
        <Link to="/signup"><Button style={{backgroundColor: "#49C1A7", color: "white"}}>Founder - Sign Up</Button></Link>
        <Link to="/founders"><Button>Meet founders</Button></Link>
      </div>
      <h2>Explore projects</h2>
      <div className="card-container">
      {projects.map(p => <ProjectCard project={p} />)}
      </div>
    </div>
  );
};

export default Home;
