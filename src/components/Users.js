import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import axiosWithAuth from "../utils/axiosWithAuth";
import ProjectDetail from "./ProjectDetail";

const Users = props => {
  // console.log('props from Users:', props)

  const id = localStorage.getItem("id")
  const [user, setUser] = useState("")
  const [project, setProject] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get(`https://vr-funding-app.herokuapp.com/api/founders/${id}`)
      .then(res => {
        setUser(res.data.founder.name)
      })
      .catch(err => console.log(err))
  }, [user])

  useEffect(() => {
    axiosWithAuth()
      .get(`https://vr-funding-app.herokuapp.com/api/projects/`)
      .then(res => {
        console.log('project data: ', res);
        const projectlist = res.data.project.filter(num => num.founders_id == id);
        setProject(projectlist)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="home-container">
      <h2>Welcome to VR-Funding-Platform</h2>
      <div className="btn-container">
        <Link to="new-project"><Button style={{backgroundColor: "#40367C", color: "white"}}>Start projects</Button></Link>
        <Link to="/"><Button style={{backgroundColor: "#49C1A7", color: "white"}}>Discover projects</Button></Link>
      </div>
      {user ? <h3>Hello, {user}</h3> : <h3>loading...</h3>}
      <div className="card-container">
        {project ? project.map(p => <ProjectDetail title={p.project_title} id={p.id} key={p.id} funding={p.project_funding} assets={p.assets} image={p.image} description={p.project_description}/>) : null}
      </div>
    </div>
  );
};

export default Users;