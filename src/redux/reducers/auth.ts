import { handleActions } from "redux-actions";
import { AuthActions } from "../actions";

const initialState = {
  currentUser: <any>{},
};

export const AuthReducer = handleActions(
  {
    [AuthActions.Type.SET_USER]: (state, action) =>
      (state.currentUser = { ...state, currentUser: action.payload }),
  },
  initialState
);
