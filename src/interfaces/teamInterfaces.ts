import { IUser } from "./userInterface";

export interface ITeam extends Document {
  users: IUser[];
}
