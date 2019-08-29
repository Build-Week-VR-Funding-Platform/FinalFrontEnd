import React from "react";
import  axiosWithAuth  from "../utils/axiosWithAuth";
import history from '../utils/history';

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import { Button } from "semantic-ui-react";

const SignUp = ({ errors, touched, status, isSubmitting }) => {
  return (
    <div className="form-container">
      <h2>Sign up</h2>
      <Form>
        <p>Username:</p>
        <Field type="username" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <p>Password:</p>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <p>Name:</p>
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <p>Email address:</p>
        <Field type="text" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Button type="submit" style={{backgroundColor: "#011638", color: "white"}}>Submit</Button>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || "",
      name: values.name || "",
      email: values.email || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    password: Yup.string()
      .min(8, "Password must be 8 characters of longer")
      .required("Password is required!"),
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required!"),
  }),

  handleSubmit(values) {
    console.log("handleSubmit clicked");
    axiosWithAuth()
      .post("https://vr-funding-app.herokuapp.com/api/auth/reg", values)
      .then(res => {
        console.log(res)
        if(res.data.status===201){
        history.push('/login')
        }
        // since were using axiosWithAuth we dont set token here, and this is the signup
      })
      .catch(err => console.log(err.response));
  }
})(SignUp);

export default FormikUserForm;