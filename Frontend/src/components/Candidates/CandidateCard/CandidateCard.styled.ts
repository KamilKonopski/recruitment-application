import { styled } from "styled-components";
import { theme } from "../../../common/styles/theme";

export const CardWrapper = styled.div`
  background-color: ${theme.colors.card};
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
