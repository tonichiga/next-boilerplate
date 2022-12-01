import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubApi } from "./api/github";
import { localPostsApi } from "./api/localPostsApi";
import githubReducer from "./github/github-reducer";

export const store = configureStore({
  reducer: {
    // [githubApi.reducerPath]: githubApi.reducer,й
    // [localPostsApi.reducerPath]: localPostsApi.reducer,
    github: githubReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware()
  //     .concat(githubApi.middleware)
  //     .concat(localPostsApi.middleware),
});

// setupListeners(store.dispatch);
