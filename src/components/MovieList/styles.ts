import styled from "styled-components";

export const ListContainer = styled.section`

  h3 {
    font-size: 28px;
    font-family: 'Sora', sans-serif;
  }

  width: 100%;
  & + & {
    margin-top: 32px;
  }

  .listHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${({theme}) => theme.colors.pink.main};
      transition: color 0.2s ease-in;

      &:hover {
        color: ${({theme}) => theme.colors.pink.dark};
      }
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: space-between;
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