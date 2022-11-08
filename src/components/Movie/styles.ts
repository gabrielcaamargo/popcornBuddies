import styled from "styled-components";

export const MovieContainer = styled.div`
  width: 300px;
  height: 425px;  
  border-radius: 8px;
  padding-bottom: 32px;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.alternativeBackground};

  .imgArea {
    width: 340px;
    height: 80%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
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
      overflow: hidden;
      /* text-overflow: ellipsis; */
    }
  }
`;
