import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid black;
  width: 150px;
  height: 30px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: #26c955;
    transition: 0.7s;
    color: white;
  }
`;
