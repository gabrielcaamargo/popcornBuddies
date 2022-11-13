import styled from "styled-components";

export const MenuContainer = styled.div`
  background-color: ${({theme}) => theme.colors.alternativeBackground};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  padding: 12px 32px;
  top: 0;
  left: 0;

  @keyframes MenuShowUp {
    from {
      transform: translateX(500px);
    }

    to {
      transform: translateX(0px);
    }
  }

  @keyframes MenuGoAway {
    from {
      transform: translateX(0px);
    }

    to {
      transform: translateX(500px);
    }
  }

  animation: .6s ease-in-out 1 MenuShowUp;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      text-align: center;
      margin-bottom: 24px;
    }

    button {
      background: none;
      border: none;
      outline: none;

      &:active {
        animation: .6s ease-in-out 1 MenuGoAway;
      }
    }
  }
`;

export const UserLinks = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 24px;

    li {
      font-size: 32px;
      
      a {
        display: flex;
        align-items: center;
        gap: 4px;
        transition: all 0.2s ease-in;
        &:hover {
          filter: brightness(0.8);
        }
      }
    }

    &:first-of-type {
      &::after {
        content: '';
        height: 2px;
        width: 60%;
        background-color: ${({theme}) => theme.colors.pink.dark};
        margin-top: 8px;  
      }
    }
`;