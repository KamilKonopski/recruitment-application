export type ActionsType = "Zmień status" | "Wyślij e-mail";

export type StatusType = "delivered" | "rejected" | "invited";

export interface ICandidate {
  id: number;
  fullName: string;
  position: string;
  status: StatusType;
  email: string;
  actions: ActionsType;
}
