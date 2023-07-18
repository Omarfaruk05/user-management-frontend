import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ limit, searchTerm, genre, publicationTime }) =>
        `/book/get-book?limit=${limit}&searchTerm=${searchTerm}&genre=${genre}&publicationTime=${publicationTime}`,
      providesTags: ["comment"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/get-single-book/${id}`,
      providesTags: ["comment"],
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
    deleteBook: builder.mutation({
      query: (data) => ({
        url: `/book/delete-book`,
        method: "DELETE",
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
  useDeleteBookMutation,
} = bookApi;
