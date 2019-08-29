import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

const ProjectDetail = (props) => {
    // console.log('props from projectDetail: ', props)
    return(
        <Card>
            <Card.Header><h2>{props.title}</h2></Card.Header>
            <Image src={props.image} alt="project-image" />
            <Card.Content>
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>
            <Button style={{backgroundColor:'#011638', color: "#FBFCFF"}}>Detail</Button>
        </Card>
    )
}

export default ProjectDetail;