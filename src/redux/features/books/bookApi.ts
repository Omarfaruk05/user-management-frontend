import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (limit) => `/book/get-book?limit=${limit}`,
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/get-single-book/${id}`,
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: `/book/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
    updateBook: builder.mutation({
      query: (data) => ({
        url: `/book/update-book`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useCreateBookMutation,
} = bookApi;
