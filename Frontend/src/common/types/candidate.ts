export type ActionsType = "change" | "send";

export type StatusType = "delivered" | "rejected" | "invited";

export interface ICandidate {
  id: string;
  fullName: string;
  position: string;
  status: StatusType;
  email: string;
  actions: ActionsType;
}
