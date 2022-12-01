import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const localPostsApi = createApi({
  reducerPath: "localPosts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  refetchOnFocus: true,
  tagTypes: ["Cards"],

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (username) => ({
        url: `cards`,
        params: { q: username },
        per_page: 10,
      }),
      providesTags: ["Cards"],

      // transformResponse: (response) => response.items,
    }),

    getPostById: builder.query({
      query: (username) => ({
        url: `users/${username}/repos`,
      }),
      providesTags: ["Cards"],

      // transformResponse: (response) => response.items,
    }),

    addNewPost: builder.mutation({
      query: (payload) => ({
        url: "/cards",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Cards"],
    }),

    changeCard: builder.mutation({
      query: (payload) => ({
        url: `/cards/${payload.id}`,
        method: "PUT",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Cards"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useLazyGetPostByIdQuery,
  useAddNewPostMutation,
  useChangeCardMutation,
} = localPostsApi;
