import styled from "styled-components";

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

  &[disabled] {
    background-color: #CCC;
    cursor: default;
  }
`;