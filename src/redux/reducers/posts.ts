import { handleActions } from "redux-actions";
import { IPost } from "../../types/posts";
import { AuthActions } from "../actions";

const initialState: any = [];

export const PostsReducer = handleActions(
  {
    [AuthActions.Type.SET_POST]: (state: any, action) =>
      (state = action.payload),
    [AuthActions.Type.CREATE_POST]: (state: any, action) =>
      (state = [...state, action.payload]),
    [AuthActions.Type.DELETE_POST]: (state: any, action) =>
      (state = state.filter((post: IPost) => post._id !== action.payload)),
    [AuthActions.Type.PATCH_POST]: (state: any, action) =>
      (state = state.map((post: IPost) =>
        post._id === action.payload._id ? action.payload : post
      )),
  },
  initialState
);
