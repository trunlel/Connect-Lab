import styled from "styled-components";

export const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 0;
  margin: 0;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding-left: 1em;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding-right: 5em;
`;

export const Li = styled.li`
  margin-right: 2em;

  a {
    color: #26c955;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
  }
  a:hover {
    font-weight: bold;
    transition: 360ms;
    color: black;
  }
`;
