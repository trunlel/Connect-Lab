import styled from "styled-components";

export const Main = styled.main`
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TempDiv = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdfd;
  margin-top: 50px;
  box-shadow: 3px 4px 17px black;
  width: 70%;

  h2 {
    margin-top: 20px;
    font-size: 35px;
  }
`;

export const PrevDiv = styled.div`
  gap: 30px;
  font-weight: 100;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;
