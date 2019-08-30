import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import  axiosWithAuth  from "../utils/axiosWithAuth";
import { Button } from "semantic-ui-react";
import history from '../utils/history';
import UpdatedForm from "./UpdatedForm";

function EditForm(props){
console.log('props', props);
    const [projectList, setProjectList] = useState([])
    const [newProject, SetNewProject] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('https://vr-funding-app.herokuapp.com/api/projects/1')
        .then(res => {
            console.log(res)
            SetNewProject(res.data.project)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <Form className="form-container">
                <h2>Create a new project with us</h2>
                <p>Image for your project</p>
                <Field type = "text" name="image" placeholder="Image URL" />
                <p>Project Title</p>                
                <Field type = "text" name="project_title" placeholder="title" />
                <p>Project Type</p>                
                <Field type = "text" name="project_type" placeholder="type" />
                <p>Mission Statement</p>                
                <Field type = "text" name="mission_statement" placeholder="mission statement" />
                <p>Project Description</p>                
                <Field type = "text" name="project_description" placeholder="description" />
                <p>Funding for Project</p>                
                <Field type = "text" name="funding_amount" placeholder="funding amount" />
                <p>Project Timeline</p>                
                <Field type = "text" name="project_timeline" placeholder="timeline" />
                <p>Project Assets</p>                
                <Field type = "text" name="project_assets" placeholder="assets" />
                <p>Founder's ID number</p>                
                <Field type = "number" name="founders_id" placeholder="ID number" />
                <Button style={{backgroundColor: "#011638", color: "white"}} content="Submit Your Project!" />
                {newProject.length > 0 ? newProject.map(a=> <UpdatedForm projectList={a.project}/>) : null}
            </Form>
        </div>
    );
}
const FormikEditForm = withFormik({
    mapPropsToValues({ image, project_title, project_type, mission_statement, project_description, funding_amount, project_timeline, project_assets, founders_id }){
        return {
            image: image || "",
            project_title: project_title || "",
            project_type: project_type || "",
            mission_statement: mission_statement|| "",
            project_description: project_description || "",
            funding_amount: funding_amount || "32,453",
            project_timeline: project_timeline || "Start 1/20/2019, Estimated finish: 2/2-/2019",
            project_assets: project_assets || "",
            founders_id: founders_id || 1,
        };
    },
    handleSubmit(values){
        console.log(values)
        axiosWithAuth()
        .post("https://vr-funding-app.herokuapp.com/api/projects", values)
        .then(res => {
            console.log('formsubmitres: ', res)
            history.push('/');
            // resetForm();
            // setSubmitting(false);
            // push to the user page and render new-project
        })
        .catch(err => {
            console.log('FormSubmiterr: ', err);
            // setSubmitting(false);
            
        });
    } 
})(EditForm);

export default FormikEditForm;