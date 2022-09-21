import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bbb;
  border-radius: 10px;
  box-shadow: 5px 14px 20px 0px black;
  flex: 1 1 150px;
  max-width: 350px;
  min-width: 350px;
  width: 350px;
  max-height: 350px;
  min-height: 350px;
  height: 350px;
  margin: 5px;

  p {
    margin-top: 30px;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  margin: 30px;
  gap: 10px;
  flex-wrap: wrap;
`;
