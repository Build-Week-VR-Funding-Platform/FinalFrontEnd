import React from "react";
import axiosWithAuth  from "../utils/axiosWithAuth";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import history from '../utils/history';
import { Button } from "semantic-ui-react";

const Login = ({ errors, touched, status, isSubmitting }) => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <Form>
        <p>Username:</p>
        <Field type="text" name="username" placeholder="Username" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <p>Password:</p>       
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Button type="submit" style={{backgroundColor: "#011638", color: "white"}}>Submit</Button>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || "",
    };
  },

  // validationSchema: Yup.object().shape({
  //   name: Yup.string().required("Name is required!"),
  //   email: Yup.string()
  //     .email("Email not valid")
  //     .required("Email is required!"),
  //   password: Yup.string()
  //     .min(8, "Password must be 8 characters of longer")
  //     .required("Password is required!"),
  //   term: Yup.bool().oneOf([true], "Term must be checked")
  // }),

  handleSubmit(values) { // to do when melanie is ready with an endpoint for us 
    console.log("handleSubmit clicked, values: ", values);
    axiosWithAuth()
      .post("https://vr-funding-app.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        if(res.data.statusText==="OK"){
          history.push('/');
        }
        // use axios and post user info to backend?
      })
      .catch(err => console.log(err.response));
  }
})(Login);

export default FormikLoginForm;
