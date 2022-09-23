import styled from "styled-components";

export const Main = styled.main`
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const DivWeather = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const DivSearch = styled.div`
  margin-left: 13%;
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  button {
    font-size: 17px;
    font-weight: 200;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: transparent;
    filter: drop-shadow(0 0 15px #26c955);
  }
  button:hover,
  button:focus {
    transition: 0.6s;
    color: white;
    background-color: #26c955;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 30px;
`;
export const DivCard = styled.div`
  padding: 15px;
  width: 250px;
  height: 100px;
  border-radius: 10px;
  background-color: #ffff;
  box-shadow: 5px 5px 16px black;
`;
