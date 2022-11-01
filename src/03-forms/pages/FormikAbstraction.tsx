import { Formik, Form } from "formik";
import * as Yup from "yup";

import MyCheckbox from "../components/MyCheckbox";
import MySelect from "../components/MySelect";
import MyTextInput from "../components/MyTextInput";

import "../styles/styles.css";

const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Componets</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Ingrese un email válido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-junior"], "Esta opción no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => {
          return (
            <Form>
              <MyTextInput
                label="First Name"
                name="firstName"
                placeholder="Type your first name"
              />

              <MyTextInput
                label="Last Name"
                name="lastName"
                placeholder="Type your last name"
              />

              <MyTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Type your email address"
              />

              <MySelect label="Job Type" name="jobType">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-junior">IT Junior</option>
              </MySelect>

              <MyCheckbox label="Terms & conditions" name="terms" />

              <button type="submit"> Submit </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikAbstraction;
