import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

