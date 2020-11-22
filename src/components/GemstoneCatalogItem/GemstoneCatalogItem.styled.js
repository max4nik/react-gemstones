import styled from "styled-components";
import { ButtonPB } from "../ButtonPurpleBlue/ButtonPurpleBlue.styled";

export const Item = styled.div`
  width: 275px;
  border: 3px solid #0f0f6d;
  border-radius: 3rem;
  background: black;
  opacity: 1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
export const GemstoneImage = styled.img`
  width: 70%;
  align-self: center;
`;
export const Title = styled.h2`
  margin: 0 0 0.5rem 2.5rem;
`;
export const Price = styled.p`
  opacity: 85%;
`;
export const Weight = styled.p`
  opacity: 85%;
  margin-left: 1.5rem;
`;
export const ItemButton = styled(ButtonPB)`
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 0 1.25rem 1.25rem;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0.5rem 2.5rem;
`;
