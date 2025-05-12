export interface ICandidate {
  id: string;
  fullName: string;
  email: string;
  position: string;
}

export interface ICandidatesColumn {
  title: string;
  candidates: ICandidate[];
}

export interface ICandidatesBoard {
  application: ICandidatesColumn;
  interview: ICandidatesColumn;
  rejected: ICandidatesColumn;
}

export interface CandidatesContextType {
  candidates: ICandidatesBoard;
  setCandidates: React.Dispatch<React.SetStateAction<ICandidatesBoard>>;
  moveToColumn: (target: keyof ICandidatesBoard, candidate: ICandidate) => void;
}
