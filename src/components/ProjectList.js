import React, { useState, useEffect } from 'react';
import dummyData from '../utils/dummyData';
import ProjectDetail from './ProjectDetail';

function ProjectList(props){

    console.log('props from projectlist', props)

    return(
        
        <div className = "Projects" style={{border: "2px solid black"}}>
            <h1>HELLO!</h1>
           <h5>Maps out each "VR Project" in that companys account</h5>
            {props.projects.map((project, key) => <ProjectDetail proejct ={project} key = {key} />
            )}
            
        
        </div>
        
    );

}

export default ProjectList;