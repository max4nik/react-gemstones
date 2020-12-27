import * as Yup from "yup";

const current = new Date();
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/g;
const cardRegExp = /^(\d{16})$/g;
const cvv2RegExp = /^(\d{3})$/g;

export const ValidationForm = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Min length is 2!")
    .max(20, "Max length is 20!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Min length is 2!")
    .max(20, "Max length is 20!")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Phone number is required"),
  address: Yup.string()
    .min(2, "Min length is 5!")
    .max(100, "Max length is 100!")
    .required("Address is required"),
  cardNumber: Yup.string()
    .matches(cardRegExp, "invalid card number")
    .required("Card Number is required"),
  expiresDate: Yup.date()
    .min(current, "Your card is no longer valid")
    .required("Expires date is required"),
  cvv2: Yup.string()
    .matches(cvv2RegExp, "invalid card cvv")
    .required("CVV2 is required"),
});
