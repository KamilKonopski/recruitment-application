import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  width: 100%;
  padding: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  border-top: 2px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px -5px 20px -5px ${({ theme }) => theme.colors.border};

  & a {
    font-weight: bold;
    transition: color 0.2s linear;
  }

  & a:hover {
    color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;
