/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IUser } from "../../../interfaces/userInterface";

interface ITeamState {
  users: IUser[];
}

const initialState: ITeamState = {
  users: [],
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addToTeam: (state, action) => {
      const existUser = state?.users?.find(
        (user) => user._id === action.payload._id
      );
      const existDomain = state?.users?.find(
        (user) => user.domain === action.payload.domain
      );
      if (existUser) {
        toast.error("User is already added.");
      }
      if (existDomain) {
        toast.error("Already added this domain.");
      }
      if (!existDomain && !existUser) {
        state.users.push(action.payload);
        toast.success("Successfully add to team.");
      }
    },
    resetTeam: (state) => {
      state.users = [];
    },
  },
});

export const { addToTeam, resetTeam } = teamSlice.actions;
export default teamSlice.reducer;
