import { createAction } from "@reduxjs/toolkit";

const setFavorite = createAction("github/setFavorite");

const githubActions = {
  setFavorite,
};

export default githubActions;