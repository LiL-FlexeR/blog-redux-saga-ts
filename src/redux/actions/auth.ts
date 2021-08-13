/* eslint-disable */
import { IAuth, ILogin } from "./../../types/auth";
import { createActions } from "redux-actions";

enum Type {
  SET_AUTH = "SET_AUTH",
  SIGN_IN = "SIGN_IN",
}

const setAuthInfo = createActions<IAuth>(Type.SET_AUTH);
// const signIn = createActions<ILogin>(Type.SIGN_IN);

export const AuthActions = {
  Type,

  setAuthInfo,
  // signIn,
};

export type AuthActions = Omit<typeof AuthActions, "Type">;
