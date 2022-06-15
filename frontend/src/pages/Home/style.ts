import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 75px;
  background: rgb(255, 238, 0);
  justify-content: space-between;
`
export const HomePages = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`
export const HomePage = styled.li`
  display: flex;
  height: fit-content;
  align-items: center;
  padding: 6px 10px;
  margin-right: 5px;
  background: rgb(255, 238, 0);
  border-radius: 10px;

  &:hover{
    background: rgb(255, 238, 0);
    filter: brightness(95%);
    transition: background-color .5s ease;
    cursor: pointer; 
  }
`
export const HomePageP = styled.p`
  font-family: 'Prompt', sans-serif;
  font-size: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0;
  padding: 0;
`