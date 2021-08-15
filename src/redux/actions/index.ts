import { createAction } from "redux-actions";

enum Type {
  SET_USER = "SET_USER",
  SIGN_IN = "SIGN_IN",
}

const setUserAction = createAction(Type.SET_USER);
const signInAction = createAction(Type.SIGN_IN);

export const AuthActions = {
  Type,

  setUserAction,
  signInAction,
};

export type AuthActions = Omit<typeof AuthActions, "Type">;
