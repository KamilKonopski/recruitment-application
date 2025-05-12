import { useEffect, useState } from "react";
import CandidatesContext from "../context/CandidatesContext";
import type { ICandidatesBoard, ICandidate } from "../types/candidate";

const LOCAL_STORAGE_KEY = "candidates_data";

const defaultCandidates: ICandidatesBoard = {
  application: {
    title: "Nowi kandydaci",
    candidates: [
      {
        id: "id-1",
        fullName: "Kamil Konopski",
        position: "Junior Frontend Developer",
        email: "Kamil.Konopski@gmail.com",
      },
    ],
  },
  interview: {
    title: "Zaproszeni na rozmowę",
    candidates: [
      {
        id: "id-2",
        fullName: "Jan Kowalski",
        position: "Senior Backend Developer",
        email: "Jan.Kowalski@gmail.com",
      },
    ],
  },
  rejected: {
    title: "Odrzuceni",
    candidates: [
      {
        id: "id-3",
        fullName: "Anna Nowak",
        position: "UX/UI Designer",
        email: "Anna.Nowak@gmail.com",
      },
    ],
  },
};

export const CandidatesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [candidates, setCandidates] = useState<ICandidatesBoard>(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultCandidates;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(candidates));
  }, [candidates]);

  const moveToColumn = (
    target: keyof ICandidatesBoard,
    candidate: ICandidate
  ) => {
    setCandidates((prev) => {
      const cleaned: ICandidatesBoard = {
        application: {
          ...prev.application,
          candidates: prev.application.candidates.filter(
            (c) => c.id !== candidate.id
          ),
        },
        interview: {
          ...prev.interview,
          candidates: prev.interview.candidates.filter(
            (c) => c.id !== candidate.id
          ),
        },
        rejected: {
          ...prev.rejected,
          candidates: prev.rejected.candidates.filter(
            (c) => c.id !== candidate.id
          ),
        },
      };

      return {
        ...cleaned,
        [target]: {
          ...cleaned[target],
          candidates: [...cleaned[target].candidates, candidate],
        },
      };
    });
  };

  return (
    <CandidatesContext.Provider
      value={{ candidates, setCandidates, moveToColumn }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};
