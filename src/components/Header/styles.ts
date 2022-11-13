import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 64px;
  box-shadow: 0px 12px 24px rgba(57, 55, 96, 0.6);

  @media screen and (max-width: 768px) {
    padding: 12px 32px;
    align-items: center;
    h1 {
      font-size: 28px;
    }
  }

  & div {
    display: flex;
    align-items: center;
    gap: 24px;

    @media screen and (max-width: 1400px) {
      gap: 20px
    }

    @media screen and (max-width: 1024px) {
      gap: 12px;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .menu-button {
    background: none;
    border: none;
    outline: none;
    display: none;

    img {
      width: 32px;
      height: 32px;
    }

    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
`;