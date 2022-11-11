import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px;
  box-shadow: 0px 12px 24px rgba(57, 55, 96, 0.6);

  & div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;