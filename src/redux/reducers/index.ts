import { PostsReducer } from "./posts";
import { combineReducers } from "redux";
import { AuthReducer } from "./auth";

export const rootReducer = combineReducers({
  currentUser: AuthReducer,
  posts: PostsReducer,
});
