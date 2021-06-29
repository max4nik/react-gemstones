import styled from "styled-components";

export const Item = styled.div`
  width: 325px;
  border: 3px solid #0f0f6d;
  border-radius: 3rem;
  background: black;
  opacity: 1;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 2rem 2rem 2.5rem 5rem;
`;
export const GemstoneImage = styled.img`
  width: 50%;
  padding: 1.5rem;
  align-self: center;
`;
export const Title = styled.h2`
  font-size: 150%;
`;
export const Price = styled.p`
  font-size: 150%;
  opacity: 85%;
  margin-top: 1rem;
`;
export const Weight = styled.p`
  font-size: 150%;
  opacity: 85%;
  margin-top: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 1rem 4rem 1rem 0;
`;
