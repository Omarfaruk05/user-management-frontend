import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (data) => ({
        url: `/user/get-user`,
        method: "POST",
        body: data,
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `/user/create-user`,
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/user/update-user`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
} = userApi;
