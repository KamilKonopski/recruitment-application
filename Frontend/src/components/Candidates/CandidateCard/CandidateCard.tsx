import Text from "../../../common/components/Text";
import CandidateButton from "../CandidateButton/CandidateButton";

import { CardWrapper, ButtonsWrapper } from "./CandidateCard.styled";

import type { ICandidate } from "../../../common/types/candidate";
import { useCandidates } from "../../../common/hooks/useCandidates";

interface ICandidateCardProps {
  candidate: ICandidate;
  columnName: string;
}

const CandidateCard = ({ candidate, columnName }: ICandidateCardProps) => {
  const { moveToColumn } = useCandidates();
  const addToInterviewColumn = () => {
    moveToColumn("interview", candidate);
  };
  const addToRejectedColumn = () => {
    moveToColumn("rejected", candidate);
  };
  return (
    <CardWrapper>
      <Text $light={true}>{candidate.fullName}</Text>
      <Text $light={true}>{candidate.position}</Text>
      <Text $light={true} size="14px">
        {candidate.email}
      </Text>
      {columnName === "application" ? (
        <ButtonsWrapper>
          <CandidateButton
            columnName={columnName}
            buttonText="Zaproś"
            clickHandler={addToInterviewColumn}
          />
          <CandidateButton
            buttonText="Odrzuć"
            clickHandler={addToRejectedColumn}
          />
        </ButtonsWrapper>
      ) : (
        <CandidateButton columnName={columnName} buttonText="Wyślij e-mail" />
      )}
    </CardWrapper>
  );
};

export default CandidateCard;
