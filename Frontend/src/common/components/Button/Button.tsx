import { ButtonStyled } from "./Button.styled";

interface IButtonProps {
  buttonText: string;
  clickHandler?: () => void;
  buttonLight: boolean;
  buttonFontSize?: string;
  buttonPadding?: string;
  buttonMargin?: string;
}

const Button = ({
  buttonText,
  clickHandler,
  buttonLight,
  buttonPadding,
  buttonFontSize,
  buttonMargin,
}: IButtonProps) => {
  return (
    <ButtonStyled
      type="button"
      onClick={clickHandler}
      light={buttonLight}
      padding={buttonPadding}
      fontSize={buttonFontSize}
      margin={buttonMargin}
    >
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
