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

export const Img = styled.img`
  display: flex;
  margin-top: 20px;
  margin-left: 20%;
  width: 60%;
  height: 60%;
`;

export const DivModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;

  label {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #105d2d;
    font-size: 19px;
  }
  select {
    font-size: 20px;
    margin-bottom: 10px;
    width: 50%;
  }
`;


