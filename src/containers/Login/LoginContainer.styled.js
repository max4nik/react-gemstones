import styled from "styled-components";
import { Link } from "react-router-dom";
export const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  color: white;
  padding-top: 4.5rem;
  margin-bottom: 1rem;
  font-size: 250%;
`;
export const SignUpLink = styled(Link)`
  color: blueviolet;
  text-decoration: none;
  margin-bottom: 0.75rem;
`;
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 10rem 7.3rem 10rem;
  color: white;
`;

export const SignUp = styled.h3`
  margin-top: 0.75rem;
`;
