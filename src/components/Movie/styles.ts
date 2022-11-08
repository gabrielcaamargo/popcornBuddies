import styled from "styled-components";

export const MovieContainer = styled.div`
  width: 342px;
  border-radius: 8px;
  padding-bottom: 32px;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.alternativeBackground};

  img {
    height: 513px;
  }

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
`;
