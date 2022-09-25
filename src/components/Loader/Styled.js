import styled from "styled-components";


export const LoaderDiv = styled.main`
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid green;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
