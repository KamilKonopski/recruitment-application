import { useCandidates } from "../../../common/hooks/useCandidates";
import CandidatesColumn from "../CandidatesColumn/CandidatesColumn";

import { BoardWrapper } from "./CandidatesBoard.styled";

const CandidatesBoard = () => {
  const { candidates } = useCandidates();

  return (
    <BoardWrapper>
      <CandidatesColumn
        candidatesColumn={candidates.application}
        columnName={Object.keys(candidates)[0]}
      />
      <CandidatesColumn
        candidatesColumn={candidates.interview}
        columnName={Object.keys(candidates)[1]}
      />
      <CandidatesColumn
        candidatesColumn={candidates.rejected}
        columnName={Object.keys(candidates)[2]}
      />
    </BoardWrapper>
  );
};

export default CandidatesBoard;
