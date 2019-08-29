import React, {useState, useEffect} from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import history from '../utils/history';
import FormikEditForm from '../components/EditForm';
const ProjectDetail = (props) => {
    // console.log('props from projectDetail: ', props)
    console.log('props', props)
  const [editing, setEditing] = useState([])


//   const editProject = project =>{
//     setProjectToEdit(project);
//   };

  
    return(
        <Card>
            <Card.Header><h2>{props.title}</h2></Card.Header>
            <Image src={props.image} alt="project-image" />
            <Card.Content>
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>
            <FormikEditForm project={props} />
           
                <Button  style={{backgroundColor:'#011638', color: "#FBFCFF"}}>See and Edit Details</Button>
              
        </Card>
    )
}

export default ProjectDetail;