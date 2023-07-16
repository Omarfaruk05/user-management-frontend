import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (limit) => `/book/get-book?limit=${limit}`,
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/get-single-book/${id}`,
    }),
    postComment: builder.mutation({
      query: (data) => ({
        url: `/update-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery } = bookApi;
