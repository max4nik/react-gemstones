import styled from "styled-components";
import { Input } from "antd";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const InputStyled = styled(Input)`
  margin: 20px;
  margin-bottom: 40px;
  width: 300px;
  height: 2rem;
  line-height: 1.5rem;
  border: 5px solid #0f0f6d;
  font-size: 1em;
  border-radius: 20px;
`;

export const ErrorStyled = styled.div`
  position: absolute;
  color: red;
  font-size: 12px;
  top: 80px;
  left: 20px;
`;
