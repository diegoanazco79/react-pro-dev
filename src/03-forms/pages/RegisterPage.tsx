import { FormEvent } from "react";

import useForm from "../hooks/useForm";

import "../styles/styles.css";

const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={(ev) => onSubmit(ev)}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(ev) => onChange(ev)}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => onChange(ev)}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>El email no es válido</span>}
        <input
          name="password1"
          type="password"
          placeholder="Password"
          value={password1}
          onChange={(ev) => onChange(ev)}
          className="has-error"
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>El password tiene que ser mayor a 6 caracteres</span>
        )}

        <input
          name="password2"
          type="password"
          placeholder="Repet Password"
          value={password2}
          onChange={(ev) => onChange(ev)}
          className="has-error"
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && !(password1 === password2) && (
          <span>Las contraseñas deben ser iguales</span>
        )}
        <button type="submit">Create</button>
        <button onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  );
};

export default RegisterPage;
