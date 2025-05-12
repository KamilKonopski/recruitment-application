import CandidateCard from "../CandidateCard/CandidateCard";
import CandidateButton from "../CandidateButton/CandidateButton";

import type { ICandidatesColumn } from "../../../common/types/candidate";

interface ICandidatesColumnProps {
  candidatesColumn: ICandidatesColumn;
  columnName: string;
}

import { ColumnWrapper } from "./CandidatesColumn.styled";

const CandidatesColumn = ({
  candidatesColumn,
  columnName,
}: ICandidatesColumnProps) => {
  return (
    <ColumnWrapper $variant={columnName}>
      <h3>{candidatesColumn.title}</h3>
      {columnName === "application" ? (
        <CandidateButton
          columnName="application"
          buttonText="&#43; Dodaj Kandydata"
        />
      ) : null}
      {candidatesColumn.candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          columnName={columnName}
        />
      ))}
    </ColumnWrapper>
  );
};

export default CandidatesColumn;
