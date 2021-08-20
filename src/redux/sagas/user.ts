import { IAction } from "../../types/auth";
import { put, call } from "@redux-saga/core/effects";
import { AuthActions } from "../actions";
import { deleteUser, updateUser } from "./api/user";

export function* patchUserWorker(action: IAction): any {
  const patch = yield call<any>(updateUser, action.payload);
  yield put(AuthActions.setUserAction(patch));
}

export function* deleteUserWorker(action: IAction): any {
  yield call<any>(deleteUser, action.payload);
  yield put(AuthActions.resetUserAction());
}
