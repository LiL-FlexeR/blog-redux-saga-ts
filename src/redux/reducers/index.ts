import { IRootReducer } from "./state";
import { AuthReducer } from "./auth";
import { combineReducers } from "redux";

export const rootReducer = combineReducers<IRootReducer>({
  auth: AuthReducer as any,
});
