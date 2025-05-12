import styled from "styled-components";

export const LayoutWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
`;

export const MainWrapper = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;
