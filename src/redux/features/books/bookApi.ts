import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/book/get-book`,
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/get-book/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery } = bookApi;
