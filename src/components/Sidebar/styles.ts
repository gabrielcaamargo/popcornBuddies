import styled from "styled-components";

export const Aside = styled.aside`
  padding: 24px;
  background-color: ${({theme}) => theme.colors.alternativeBackground};
  box-shadow: 2px 4px 6px rgba(22, 21, 35, 0.6);
  height: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserLinks = styled.ul`
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;

    li {
      font-size: 18px;
      
      a {
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
        margin-top: 12px;  
      }
    }
`;