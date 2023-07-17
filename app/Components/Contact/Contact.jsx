"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Contact = () => {
  return (
    <div>
      <h2>Contact.</h2>
      <p>
        Get in touch or shoot me an email directly on{" "}
        <span onClick={() => (window.location = "mailto:reembsrat@gmail.com")}>
          reembsrat@gmail.com
        </span>
      </p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}

        validate={values => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {};
          if(!values.name) {
            errors.name = 'Name Required'
          }
          if(!values.email || !emailRegex.test(values.email)) {
            errors.email = 'Valid Email Required'
          }
          if(!values.message) {
            errors.message = 'Message Required'
          }
          return errors;
        }}
      >
        {() => (
          <Form>
            <Field type="text" name="name" placeholder="Name" />

            <label htmlFor="email">Email: </label>
            <Field name="email" />

            <label htmlFor="message">Message: </label>
            <Field name="message" component="textarea" />

            <button type="submit">Send Message</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
