import { styled } from "styled-components";
import { theme } from "../../../common/styles/theme";

interface IColumnWrapperProps {
  $variant: string;
}

const headingBgColor = (variant: string) => {
  switch (variant) {
    case "application":
      return `${theme.colors.application}`;
    case "interview":
      return `${theme.colors.interview}`;
    case "rejected":
      return `${theme.colors.rejected}`;
    default:
      return `${theme.colors.backgroundAlt}`;
  }
};

export const ColumnWrapper = styled.article<IColumnWrapperProps>`
  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: ${theme.colors.backgroundAlt};
  gap: 20px;
  padding-bottom: 20px;

  & h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 8px 8px 0 0;
    background-color: ${(props) => headingBgColor(props.$variant)};
    color: ${theme.colors.buttonDark};
  }
`;
