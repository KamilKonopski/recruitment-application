import { styled } from "styled-components";

import Button from "../../../common/components/Button";

import { theme } from "../../../common/styles/theme";

interface CandidateButtonProps {
  $variant: string;
}

const headingBgColor = (variant: string) => {
  switch (variant) {
    case "application":
      return {
        bgc: theme.colors.application,
        hover: theme.colors.secondaryHover,
      };
    case "interview":
      return {
        bgc: theme.colors.interview,
        hover: theme.colors.primaryHover,
      };
    case "rejected":
      return { bgc: theme.colors.rejected, hover: theme.colors.danger };
    default:
      return {
        bgc: theme.colors.buttonLight,
        hover: theme.colors.hoverDark,
      };
  }
};

export const ButtonWrapper = styled(Button)<CandidateButtonProps>`
  background-color: ${(props) => headingBgColor(props.$variant).bgc};

  &:hover {
    background-color: ${(props) => headingBgColor(props.$variant).hover};
  }
`;
