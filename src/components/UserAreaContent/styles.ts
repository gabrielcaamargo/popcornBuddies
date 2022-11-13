import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  .buttons-container {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 100%;

    a {
      width: 50%
    }
  }

  @media screen and (max-width: 768px) {
    height: 52vh;
    margin: 0;

    justify-content: flex-start;

    .buttons-container {
      a {
        width: 70%;
      }
    }
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
`;