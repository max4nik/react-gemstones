import React from "react";
import ButtonPB from "./ButtonPurpleBlue.styled";

const ButtonPurpleBlue = ({ text, link }) => {
  return <ButtonPB to={link}>{text}</ButtonPB>;
};

export default ButtonPurpleBlue;
