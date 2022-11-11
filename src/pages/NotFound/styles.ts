import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 500px;

  h1 {
    font-size: 42px;
  }

   a {
    width: 100%;
   }
`;

export const Button = styled.button`
  background-color: ${({theme}) => theme.colors.green.main};
  border: none;
  outline: none;
  color: ${({theme}) => theme.colors.textColor};
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  font-family: "Sora", sans-serif;
  font-size: 16px;
  transition: all 0.2s ease-in;
  width: 100%;

  &:hover {
    background-color: ${({theme}) => theme.colors.green.dark};
  }

  &:active {
    background-color: ${({theme}) =>theme.colors.green.light};
  }
`;