import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  margin?: string;
  light: boolean;
}

export const ButtonStyled = styled.button<ButtonProps>`
  display: block;
  background-color: ${(props) =>
    props.light ? theme.colors.buttonBgLight : theme.colors.buttonBgDark};
  color: ${(props) =>
    props.light ? theme.colors.buttonLight : theme.colors.buttonDark};
  border-radius: 8px;
  border: none;
  font-size: ${({ fontSize = "18px" }) => fontSize};
  padding: ${({ padding = "10px 15px" }) => padding};
  margin: ${({ margin = "0" }) => margin};
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${(props) =>
      props.light ? theme.colors.hoverLight : theme.colors.hoverDark};
  }
`;
