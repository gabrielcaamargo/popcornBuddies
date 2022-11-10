import styled, { css } from "styled-components";

interface ButtonProps {
  isMovieAdded: boolean;
}

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Modal = styled.div`
  width: 960px;
  background-color: ${({theme}) => theme.colors.alternativeBackground};
  border-radius: 12px;
  padding: 24px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  
  @keyframes modalShowUp {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  animation: 0.6s ease-in-out 1 modalShowUp;


  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > h1 {
      font-size: 42px;
    }

    & > button {
      background: none;
      border: none;
      outline: none;
      transition: all 0.2s ease-in;

      &:hover {
        filter: brightness(0.8);
      }
    }

  }
  .modalContent {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 24px;
    justify-items: center;

    img {
      border-radius: 12px;
    }
  

    .movieInfo {
      .movieDescription {
        .description {
          font-size: 18px;
          line-height: 30px;
        }

        .movieActions {
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .movieRate {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 8px;

            p {
              font-size: 18px;
            }

            .rateInfo {
              display: flex;
              gap: 4px;
              align-items: center;
          }
        }   
        }
      
      }
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({theme, isMovieAdded}) => isMovieAdded ? theme.colors.danger.main : theme.colors.green.main};
  border: none;
  outline: none;
  color: ${({theme, isMovieAdded}) => isMovieAdded ? theme.colors.danger.textColor : theme.colors.textColor};
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  font-family: "Sora", sans-serif;
  font-size: 16px;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: ${({theme, isMovieAdded}) => isMovieAdded ? theme.colors.danger.dark : theme.colors.green.dark};
  }

  &:active {
    background-color: ${({theme, isMovieAdded}) => isMovieAdded ? theme.colors.danger.light : theme.colors.green.light};
  }


`;