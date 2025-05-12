import { ButtonWrapper } from "./CandidateButton.styled";

interface ICandidateButtonProps {
  buttonText: string;
  clickHandler?: () => void;
  columnName?: string;
}

const CandidateButton = ({
  buttonText,
  clickHandler,
  columnName = "default",
}: ICandidateButtonProps) => {
  return (
    <ButtonWrapper $variant={columnName} onClick={clickHandler}>
      {buttonText}
    </ButtonWrapper>
  );
};

export default CandidateButton;
