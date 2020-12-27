import React from "react";
import { Formik } from "formik";
import {
  SUContainer,
  Title,
  SignUpLink,
  SignUpForm,
  SignUp,
} from "./SignUpContainer.styled";
import InputField from "../../components/InputField/InputField";
import { LogValidationForm } from "./SignUpValidationForm";
import { ButtonPB } from "../../components/ButtonPurpleBlue/ButtonPurpleBlue.styled";
import { useHistory } from "react-router-dom";

const SignUpContainer = () => {
  const history = useHistory();
  const signUpUser = (values) => {
    localStorage.setItem("email-global", values["email"]);
    localStorage.setItem("password-global", values["password"]);
    localStorage.setItem("email-local", values["email"]);
    localStorage.setItem("password-local", values["password"]);
    history.push("");
    window.location.reload();
    scrollUp();
  };
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <SUContainer>
      <Title>Sign Up</Title>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LogValidationForm}
        onSubmit={signUpUser}
      >
        {({ handleSubmit }) => (
          <SignUpForm>
            <InputField title="Email" name="email" type="text" />
            <InputField title="Password" name="password" type="password" />
            <ButtonPB onClick={handleSubmit}>Sign Up</ButtonPB>
            <SignUp>
              {"or "}
              <SignUpLink to="login">Login</SignUpLink>
            </SignUp>
          </SignUpForm>
        )}
      </Formik>
    </SUContainer>
  );
};

export default SignUpContainer;
