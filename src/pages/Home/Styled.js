import styled from "styled-components";

export const Main = styled.main`
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
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

  img {
    width: 50%;
    height: 100%;
  }
`;
export const DivCard = styled.div`
  display: flex;
  padding: 15px;
  width: 270px;
  height: 130px;
  border-radius: 10px;
  background-color: #ffff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 16px black;

  p {
    font-weight: bold;
    color: #26c955;
  }
  a {
    margin-top: 90px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    margin-top: 5px;
    color: black;
  }
  span {
    color: #26c955;
    margin-right: 10px;
  }
`;

export const HeaderModal = styled.div`
  color: #26c955;
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeleteButton = styled.div`
  margin-top: 18%;
  margin-left: 83%;
  button {
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
    border: 1px solid red;
    width: 100px;
    color: red;
    height: 30px;
    background: transparent;
    :hover {
      transition: 1s;
      background-color: #26c955;
      color: white;
    }
  }
`;
