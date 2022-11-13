import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: start;
  gap: 8px;
  margin-top: 12px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, max-content);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, max-content);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, max-content);
    gap: 12px;
  }
`;