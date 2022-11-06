import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px;

  & span {
    color: ${({theme}) => theme.colors.pink.main}
  }

  & div {
    display: flex;
    align-items: center;
    gap: 24px;

    & ul {
      display: flex;
      gap: 12px;
      li {
        list-style: none;
      }
    }
  }
`;