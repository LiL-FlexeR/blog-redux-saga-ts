/* eslint-disable */
import { createAction } from "redux-actions";

enum Type {
  SET_USER = "SET_USER",
  AUTH_USER = "AUTH_USER",
  RESET_USER = "RESET_USER",
  SIGN_IN = "SIGN_IN",
}

const setUserAction = createAction(Type.SET_USER);
const authUserAction = createAction(Type.AUTH_USER);
const resetUserAction = createAction(Type.RESET_USER);
const signInAction = createAction(Type.SIGN_IN);

export const AuthActions = {
  Type,

  setUserAction,
  authUserAction,
  resetUserAction,
  signInAction,
};

export type AuthActions = Omit<typeof AuthActions, "Type">;
