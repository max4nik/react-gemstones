import styled from "styled-components";
export const FooterContainer = styled.div`
  background: #0f0f6d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 175px;
  position: relative;
`;
export const FooterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;
export const Email = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  margin-top: 3rem;
  color: white;
`;
export const CopyrightText = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
  color: white;
`;

export const Socials = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  margin-top: 3rem;
  width: 12%;
`;
