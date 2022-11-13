import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 750px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: auto;

  a {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 52vh;
    margin-top: 32vh;
    justify-content: flex-start;
    text-align: center;

    h1 {
      font-size: 28px;
    }

    a {
      width: 80%;
    }
  }
`;