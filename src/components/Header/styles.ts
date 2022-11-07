import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px;
  box-shadow: 0px 12px 24px rgba(57, 55, 96, 0.6);

  & div {
    display: flex;
    align-items: center;
    gap: 24px;

    input {
      border: 2px solid transparent;
      outline: none;
      border-radius: 8px;
      padding: 8px 32px;
      font-size: 16px;

      transition: all 0.2s ease-in;

      &:focus {
        border: 2px solid ${({theme}) => theme.colors.pink.main};
      }
    }
  }
`;