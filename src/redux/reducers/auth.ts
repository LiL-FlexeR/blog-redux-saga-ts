import { AuthActions } from "./../actions/auth";
import { IAuth } from "./../../types/auth";
import { handleActions } from "redux-actions";

const initialState = null;

export const AuthReducer = handleActions<IAuth | null, IAuth>(
  {
    [AuthActions.Type.SET_AUTH]: (state, action) => action.payload,
  },
  initialState
);
