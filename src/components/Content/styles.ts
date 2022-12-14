import styled from "styled-components";

export const Main = styled.main`
  padding: 24px;
  margin: 0 auto 32px;
  width: 100%;
  max-width: 1440px;

  @media screen and (max-width: 1400px) {
    max-width: 1100px;
  }

  @media screen and (max-width:1024px) {
    max-width: 900px;
  }

  @media screen and (max-width: 768px) {
    .emptyList {
      height: 27vh;

      h1 {
        margin-top: 20vh
      }
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 160px;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  background-color: rgba(22, 21, 35, 0.4);

  box-shadow: 2px 4px 6px rgba(22, 21, 35, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 64px;
    color: ${({theme}) => theme.colors.pink.main};

    @media screen and (max-width: 1024px) {
      font-size: 56px;
    }

    @media screen and (max-width: 768px) {
      font-size: 48px
    }
  }
`;

export const UserGreeting = styled.h1`
  margin: 24px 0;

span {
    color: ${({theme}) => theme.colors.pink.main};
  }
`;

export const MovieWrapper = styled.div`
  margin-top: 28px;

  .emptyList {
    text-align: center;
  }
`;

