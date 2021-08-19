/* eslint-disable */
import { createAction } from "redux-actions";

enum Type {
  SET_USER = "SET_USER",
  SET_POST = "SET_POST",
  LOAD_POST = "SET_POST_CLICK",
  AUTH_USER = "AUTH_USER",
  RESET_USER = "RESET_USER",
  SIGN_IN = "SIGN_IN",
  PATCH_USER = "PATCH_USER",
  DELETE_USER = "DELETE_USER",
  DELETE_POST = "DELETE_POST",
  CREATE_POST = "CREATE_POST",
  ADD_POST = "ADD_POST",
  REMOVE_POST = "REMOVE_POST",
  PATCH_POST = "PATCH_POST",
  UPDATE_POST = "UPDATE_POST",
}

const setUserAction = createAction(Type.SET_USER);
const setPostAction = createAction(Type.SET_POST);
const authUserAction = createAction(Type.AUTH_USER);
const resetUserAction = createAction(Type.RESET_USER);
const signInAction = createAction(Type.SIGN_IN);
const patchUserAction = createAction(Type.PATCH_USER);
const deleteUserAction = createAction(Type.DELETE_USER);
const createPostAction = createAction(Type.CREATE_POST);
const loadPostsAction = createAction(Type.LOAD_POST);
const deletePostAction = createAction(Type.DELETE_POST);
const removePostAction = createAction(Type.REMOVE_POST);
const patchPostAction = createAction(Type.PATCH_POST);
const updatePostAction = createAction(Type.UPDATE_POST);
const addPostAction = createAction(Type.ADD_POST);

export const AuthActions = {
  Type,

  setUserAction,
  authUserAction,
  resetUserAction,
  signInAction,
  patchUserAction,
  deleteUserAction,
  createPostAction,
  setPostAction,
  loadPostsAction,
  deletePostAction,
  removePostAction,
  patchPostAction,
  updatePostAction,
  addPostAction,
};

export type AuthActions = Omit<typeof AuthActions, "Type">;
