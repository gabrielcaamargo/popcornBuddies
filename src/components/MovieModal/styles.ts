import styled from "styled-components";

interface ButtonProps {
  isMovieAdded: any;
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
  
  @media screen and (max-width: 980px) {
      width: 90vw;
    }

  @media screen and (max-width: 768px) {
    padding: 48px 24px;
  }

  @media screen and (max-width: 540px) {
    height: 85vh;
    padding: 16px;
  }

  animation: 0.6s ease-in-out 1 modalShowUp;


  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 42px;
    }

    @media screen and (max-width: 768px) {
      h1 {
        font-size: 36px;
      }
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
    
    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 4px;
    }

    .moviePresentation {
      @media screen and (max-width: 768px) {
        height: 80%;
        img {
          height: 80%;
          width: 100%;
        }
      }

      @media screen and (max-width: 540px) {
        height: 70%;

        img {
          height: 70%;
        }
      }
    }


    .movieInfo {
      .movieDescription {
        .description {
          font-size: 18px;
          line-height: 30px;

          @media screen and (max-width: 768px) {
            line-height: 28px;
            font-size: 16px;
            margin-top: -180px;
          }

          @media screen and (max-width: 540px) {
            line-height: 25px;
            margin-top: -260px;
            font-size: 14px;
            margin-bottom: 24px;
          }

          @media screen and (max-width: 400px) {
            margin-top: -210px;
          }

        }
        .notLogged {
            text-align: center;
            margin-top: 8px;
            display: block;
            margin-top: 12px;

            p {
              font-size: 18px   
            }

            a {
              font-size: 22px;
              color: ${({theme}) => theme.colors.pink.main}
            }

            @media screen and (max-width: 768px) {
              p {
                font-size: 16px;
              }

              a {
                font-size: 20px;
              }
            }

            @media screen and (max-width: 540px) {
              p {
                font-size: 14px
              }

              a {
                font-size: 16px;
              }
            }
          }

        .movieActions {
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          @media screen and (max-width: 850px) {
            flex-direction: column;
            justify-content: center;
            gap: 8px;
            margin-top: -12px;

            button {
              &[disabled] {
                background-color: #CCC;
                cursor: default;
              }
            }
          }

          @media screen and (max-width: 540px) {
            button {
              font-size: 14px;
            }
          }

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