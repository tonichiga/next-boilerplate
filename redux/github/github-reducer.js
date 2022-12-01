import { createReducer, combineReducers } from "@reduxjs/toolkit";
import githubActions from "./github-actions";

const favorites = createReducer([], {
  [githubActions.setFavorite]: (state, { payload }) => [...state, ...payload],
});

export default combineReducers({
  favorites,
});
