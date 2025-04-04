import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import TextError from "../../TextError.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { useAuth } from "../../Services/auth.jsx";
import Input from "../../Input.jsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../../Services/loginServices.js";
const LoginForm = () => {
  let navigate = useNavigate();
  const auth = useAuth();
  const [passwordtype, setpasswordtype] = useState("password");
  const [visible, setvisible] = useState(false);
  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;
  const specialcharactersRegex = /(?=.[@#$%!&^&-+=()])/;
  const handleclick = () => {
    if (visible) {
      setpasswordtype("password");
    } else {
      setpasswordtype("text");
    }
    setvisible((prevState) => !prevState);
  };
  const initialValues = {
    username: "",
    password: ""
  };
  const onSubmit = async (values, onSubmitProps) => {
    try {
      const res = await loginService.check(values);
  
      console.log(res);
      
      if (res.data !== " ") {
        localStorage.setItem("id_token", res.data);
        alert("Login Successful");
  
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
  
        try {
          const userRes = await loginService.getDetailByusername(values.username);
          console.log(userRes.data);
         
          if (userRes.data) {
            const id = userRes.data.id;
            const username = userRes.data.username;
            const email = userRes.data.email;
            auth.login(id, username, email);
            console.log(id, username, email);
          } else {
            console.error("No data received from API");
          }         
  
          if (username !=null) {
            navigate("/customer");
          } 
        } catch (error) {
          console.error("Error fetching user details:", error);
          alert("Failed to retrieve user details. Please try again.");
        }
      } else {
        alert("Enter valid credentials.");
        onSubmitProps.setSubmitting(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
      onSubmitProps.setSubmitting(false);
    }
  };

  const validationSchema = yup.object({
    username: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="container">
            <Input name="username" label="Username" type="username" symbol={formik} />

            <div className="col-12 mb-2 mt-2">
              <label htmlFor="password">Password</label>
              <div clasName="row">
                <Field
                  name="password"
                  id="password"
                  type={passwordtype}
                  className="col-11 selectbox border rounded"
                />
                <button
                  type="button"
                  onClick={handleclick}
                  className="iconstyle border border-top border-bottom border-right col-1"
                >
                  {!visible ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <ErrorMessage name="password" component={TextError} />
            </div>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              className="btn login-btn col-6 offset-3 mt-4 "
            >
              Login
            </button>
            <div className="row mb-4">
              <small className="form-text col-9">
                New User/Admin?<Link to="/Signup">Signup</Link><Link className="p-2" to="/">Home</Link>
              </small>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default LoginForm;