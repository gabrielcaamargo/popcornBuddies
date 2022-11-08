import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({theme}) => theme.colors.alternativeBackground};
  padding: 8px 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const MyLinks = styled.div`
  a {
    color: inherit;
    transition: all 0.2s ease-in;
    &:hover {
      filter: brightness(0.6);
    }
  }
`;