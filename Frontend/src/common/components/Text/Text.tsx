import { styled } from "styled-components";
import { theme } from "../../../common/styles/theme";

interface TextProps extends React.ButtonHTMLAttributes<HTMLParagraphElement> {
  size?: string;
  align?: "center" | "inherit" | "justify" | "left" | "right";
  margin?: string;
  weight?: "thin" | "normal" | "semibold" | "bold" | "extraBold";
  color?: string;
  lineHeight?: string;
  wordWrap?: "break-word" | "normal" | "break-all" | "initial" | "inherit";
  whiteSpace?:
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-wrap"
    | "pre-line"
    | "break-spaces";
  lineClamp?: number;
  overflow?: "hidden" | "visible" | "scroll" | "auto" | "initial" | "inherit";
  display?: string;
  boxOrient?: string;
  letterSpacing?: string;
  $light: boolean;
}

const Text = styled.p<TextProps>`
  color: ${({ $light }) =>
    $light ? theme.colors.buttonLight : theme.colors.buttonDark};
  font-size: ${({ size = "18px" }) => size};
  text-align: ${({ align }) => align};
  margin: ${({ margin = "0 0 0 0" }) => margin};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  word-wrap: ${({ wordWrap }) => wordWrap};
  white-space: ${({ whiteSpace = "normal" }) => whiteSpace};
  -webkit-line-clamp: ${({ lineClamp }) => lineClamp};
  overflow: ${({ overflow }) => overflow && overflow};
  display: ${({ display }) => display && display};
  -webkit-box-orient: ${({ boxOrient }) => boxOrient && boxOrient};
`;

export default Text;
