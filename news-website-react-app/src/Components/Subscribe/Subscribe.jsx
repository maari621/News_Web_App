import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Subscribe.css";
export default function Subscribe() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Subscription request sent for:", values.email);

    // Simulate API call
    setTimeout(() => {
      alert("Thank you for subscribing!");
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light subscribe">
          <h3 className="mb-4">Subscribe to Our Newsletter</h3>
          <p>Subscribe to receive the day's headlines from The Indian Express straight in your inbox</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="input-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="email-forms form-control"
                  />
                  <button
                    type="submit"
                    className="btn-1 btn"
                    disabled={isSubmitting}
                    style={{marginLeft:"1vh"}}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger mt-2"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
