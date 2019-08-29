import React, {useState, useEffect} from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import history from '../utils/history';
import FormikEditForm from '../components/EditForm';
const ProjectCard = (props) => {
    // console.log('props from projectDetail: ', props)
    console.log('Project Card props', props)
  const [editing, setEditing] = useState([])


//   const editProject = project =>{
//     setProjectToEdit(project);
//   };

  
    return(
        <Card>
            <Card.Header><h2>{props.project.project_title}</h2></Card.Header>
            <Image src={props.project.image} alt="project-image" />
            <Card.Content>
                <Card.Description>
                    {props.project.project_description}
                </Card.Description>
            </Card.Content>
            <Link to ={`/details`} id={props.project.id}>
                 <Button style={{backgroundColor:'#011638', color: "#FBFCFF"}}>See and Edit Details</Button>
                 </Link>
        </Card>
    )
}

export default ProjectCard;