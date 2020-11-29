import styled from "styled-components";

export const GemstoneBlock = styled.div`
  display: flex;
  background: black;
  justify-content: space-between;
  color: white;
  margin: 2.75rem 6rem 6rem 6rem;
  flex-wrap: wrap;
`;
export const GemstoneImage = styled.img`
  width: 400px;
  height: 400px;
`;
export const GemstoneTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 25rem;
`;
export const GemstoneName = styled.h2``;
export const GemstonePrice = styled.h2``;
export const GemstoneWeight = styled.h2`
  margin-bottom: 5.5rem;
  margin-top: 0.5rem;
`;
export const GemstoneDescription = styled.p`
  font-size: 125%;
  margin-top: 1.75rem;
`;
export const ReadMore = styled.span`
  color: blue;
  opacity: 0.75;

  margin-left: 0.5rem;
  cursor: pointer;
`;
