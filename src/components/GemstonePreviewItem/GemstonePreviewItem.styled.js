import { Link } from "react-router-dom";
import styled from "styled-components";

export const Item = styled.div`
  display: flex;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
`;
export const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
`;
export const Title = styled.h2`
  width: 100%;
  text-align: center;
  border-top: 0.05rem solid white;
`;

export const Description = styled.p`
  margin: 1rem 0;
`;
export const PriceFrom = styled(Link)`
  font-size: 85%;
  text-decoration: none;
  background: #0f0f6d;
  color: #ffffff;
  cursor: pointer;
  padding: 1rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;
  &::before {
    content: "Starts from ";
  }
  &::after {
    content: " $";
  }
  &:hover {
    background: #2b2bff;
    transition: all 0.3s;
    border-radius: 10px;
    padding: 1.25rem 3.25rem 1.25rem 1.25rem;
  }
`;
