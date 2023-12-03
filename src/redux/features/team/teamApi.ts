import { ITeam } from "../../../interfaces/teamInterfaces";
import { api } from "../../api/apiSlice";

const teamApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTeam: builder.mutation({
      query: (data: { users: string[] }) => ({
        url: `/team`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["team"],
    }),
    getAllTeam: builder.query({
      query: () => ({
        url: `/team`,
        method: "GET",
      }),
      providesTags: ["team"],
    }),
  }),
});

export const { useCreateTeamMutation, useGetAllTeamQuery } = teamApi;
