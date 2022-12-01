import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (username) => ({
        url: `search/users`,
        params: { q: username },
        per_page: 10,
      }),
      transformResponse: (response) => response.items,
    }),
    getUserRepos: builder.query({
      query: (username) => ({
        url: `users/${username}/repos`,
      }),
      // transformResponse: (response) => response.items,
    }),
    addNewPost: builder.mutation({
      query: (payload) => ({
        url: "/posts",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUserReposQuery } = githubApi;

/*

Example extract data from database:

 const {
    isLoading,
    isError,
    data: userList,
  } = useGetUsersQuery(debounceValue, {
    skip: !debounceValue.length,
    refetchOnFocus: true,
  });
  const [
    getUserRepos,
    { isLoading: isRepoLoading, isError: isRepoError, data: userRepos },
  ] = useLazyGetUserReposQuery();

  */
