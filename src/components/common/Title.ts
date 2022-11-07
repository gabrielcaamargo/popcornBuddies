import styled from "styled-components";

export const Title = styled.h1`
  font-family: 'Sora', sans-serif;

  & span {
    color: ${({theme}) => theme.colors.pink.main};
  }
`;