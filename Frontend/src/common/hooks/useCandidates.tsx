import { useContext } from "react";
import CandidatesContext from "../context/CandidatesContext";

export const useCandidates = () => {
  const context = useContext(CandidatesContext);
  if (!context)
    throw new Error("useCandidates must be used within a CandidatesProvider");
  return context;
};
