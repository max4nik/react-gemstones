import styled from "styled-components";

export const ButtonPB = styled.a`
  text-decoration: none;
  background: blueviolet;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.75rem;
  padding: 1rem 1.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;

  &:hover {
    background: #2b2bff;
    transition: all 0.5s;
    &::after {
      opacity: 1;
      transition: all 0.5s;
    }
  }
`;
