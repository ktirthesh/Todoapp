import React from "react";
import { ErrorMessage, Formik } from "formik";

export function Createtask(props) {
  return (
    <div>
      <h1>CreateForm</h1>
      <Formik
        initialValues={{ task: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.task) {
            errors.task = "Please insert value!";
            return errors;
          }
        }}
        onSubmit={(values) => {
          console.log(values);
          props.createTask(values.task);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="task"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.task}
            />
            {errors.task && touched.task && errors.task}
            <ErrorMessage name="task" component="div" />

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
