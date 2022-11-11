import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  button {
    margin-top: 24px;
  }

  a {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 2px solid transparent;
  outline: none;
  border-radius: 8px;
  padding: 8px 32px;
  font-size: 16px;
  transition: all 0.2s ease-in;

  &:focus {
    border: 2px solid ${({theme}) => theme.colors.pink.main};
  }
  & + & {
    margin-top: 8px;
  }

`;