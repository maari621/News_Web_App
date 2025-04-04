import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="col-12 mb-2 mt-2">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} className="form-control" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
export default Input;
