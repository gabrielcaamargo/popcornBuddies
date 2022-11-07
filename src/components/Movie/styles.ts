import styled from "styled-components";

export const MovieContainer = styled.div`
  width: 280px;
  height: 320px;  
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.alternativeBackground};

  img {
    width: 340px;
    height: 160px;
  }

  .movieInfo {
    padding: 12px;

    p {
      font-size: 22px;
      margin-bottom: 8px;
    }

    small {
      font-size: 14px;
    }
  }
`;
