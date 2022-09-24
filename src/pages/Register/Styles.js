import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: #ccc;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #26c955;
`;

export const Input = styled.input`
  font-size: 20px;
  width: 80vw;
  background-color: transparent;
  color: black;
`;

export const SearchText = styled.h1`
  margin-top: 100px;
`;

export const Img = styled.img`
  display: flex;
  height: 70%;
  width: 100%;
`;

export const DivModal = styled.div`
  color: #26c955;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 240px;
    height: 210px;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  span {
    display: flex;
    margin: 10px;
    justify-content: space-evenly;
  }
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 23px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 5px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 19px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const CheckBoxDiv = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: green;
  font-weight: bold;
`;

export const SelectDiv = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 30px;
  select {
    font-size: 18px;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 40px;
  border-radius: 10px;
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
