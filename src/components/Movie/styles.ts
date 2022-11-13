import styled from "styled-components";

export const MovieContainer = styled.div`
  width: 342px;
  border-radius: 8px;
  padding-bottom: 32px;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.alternativeBackground};
  cursor: pointer;

  .movieInfo {
    padding: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    p {
      font-size: 22px;
      margin-bottom: 8px;
    }

    small {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90vw;

    img {
      width: 100%
    }
  }
`;
