import * as Yup from "yup";

export const LogValidationForm = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(5, "Min length is 5")
    .max(30, "Max length is 30")
    .required("Password is required"),
});
