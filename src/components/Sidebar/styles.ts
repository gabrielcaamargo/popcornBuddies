import styled from "styled-components";

export const Aside = styled.aside`
  padding: 24px;
  background-color: ${({theme}) => theme.colors.alternativeBackground};
  height: 100vh;
  box-shadow: 2px 4px 6px rgba(22, 21, 35, 0.6);
`;

export const Container = styled.div`

`;

export const UserLinks = styled.ul`
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;

    li {
      font-size: 18px;
      
      a {
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 4px;
        transition: all 0.2s ease-in;
        &:hover {
          filter: brightness(0.8);
        }
      }
    }

    &:first-of-type {
      &::after {
        content: '';
        height: 2px;
        width: 100%;
        background-color: ${({theme}) => theme.colors.pink.dark};
        margin-top: 8px;  
      }
    }
`;