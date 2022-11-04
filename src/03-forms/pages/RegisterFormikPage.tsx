import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../components/MyTextInput";

import "../styles/styles.css";

const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .min(2, "Debe de tener 3 caracteres o más")
            .required("Requerido"),
          email: Yup.string()
            .email("Ingrese un email válido")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Debe tener 6 caracteres o más")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords must match")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => {
          return (
            <Form>
              <MyTextInput
                label="First Name"
                name="firstName"
                placeholder="Type your first name"
              />

              <MyTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Type your email address"
              />

              <MyTextInput
                label="Password"
                name="password1"
                type="password"
                placeholder="Type your password"
              />

              <MyTextInput
                label="Repeat your Password"
                name="password2"
                type="password"
                placeholder="Repeat your password"
              />

              <button type="submit"> Submit </button>
              <button onClick={handleReset}>Reset Form</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
