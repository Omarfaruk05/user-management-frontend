import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://user-management-steel-one.vercel.app/api",
  }),
  tagTypes: ["user", "team"],
  endpoints: () => ({}),
});
