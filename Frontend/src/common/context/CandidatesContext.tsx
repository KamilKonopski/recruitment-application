import { createContext } from "react";
import type { CandidatesContextType } from "../types/candidate";

const CandidatesContext = createContext<CandidatesContextType | null>(null);
export default CandidatesContext;
