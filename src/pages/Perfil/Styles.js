import styled from "styled-components";

export const PerfilImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 30px;
`;

export const Div = styled.div`
  input {
    color: #26c955;
    font-size: 18px;
  }

  input:hover {
    transition: 1s;
    filter: drop-shadow(0 0 0.75rem #26c955);
  }
  input:focus {
    transition: 1s;
    filter: drop-shadow(0 0 0.75rem #26c955);
    border: 1px solid, greenyellow;
  }
  input::placeholder {
    color: #f45f;
  }
`;
