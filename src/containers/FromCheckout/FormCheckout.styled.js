import styled from "styled-components";
import { Form } from "formik";

export const FormContainer = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

export const TitleStyled = styled.h1`
  font-size: 325%;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
`;

export const FormStyled = styled(Form)``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "OpenSans-Light";
`;

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: 38rem;
  margin-top: 1rem;
`;
