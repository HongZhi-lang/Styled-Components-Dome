import styled, { css } from "styled-components";

export const flexAround = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: flex-start;
`;
export const Button = styled.button`
  height: 50px;
  padding: 0 25px;
  margin: 0 10px;
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  border: 1px solid #fff;
  border-radius: 25px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.18);
  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;
