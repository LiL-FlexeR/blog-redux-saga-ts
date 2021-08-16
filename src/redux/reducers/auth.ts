import { handleActions } from "redux-actions";
import { AuthActions } from "../actions";

const initialState = {};

export const AuthReducer = handleActions(
  {
    [AuthActions.Type.SET_USER]: (state, action) =>
      (state = { ...state, ...action.payload }),
    [AuthActions.Type.RESET_USER]: (state) => (state = {}),
  },
  initialState
);
