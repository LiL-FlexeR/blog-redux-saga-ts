import { IAction } from "./../../types/auth";
import { takeLatest } from "@redux-saga/core/effects";
import { put, call } from "@redux-saga/core/effects";
import { AuthActions } from "../actions";
import { fetchAuth, fetchCurrentUser } from "./api/signIn";

export function* signInWorker(action: IAction): any {
  const token = yield call(fetchAuth, action.payload);
  localStorage.setItem("token", token);
  const currentUser = yield call(fetchCurrentUser, token);
  yield put(AuthActions.setUserAction(currentUser));
}

export function* authUserWorker(action: IAction): any {
  const currentUser = yield call(fetchCurrentUser, action.payload);
  yield put(AuthActions.setUserAction(currentUser));
}

export default function* sagaWatcher() {
  yield takeLatest(AuthActions.Type.SIGN_IN, signInWorker);
  yield takeLatest(AuthActions.Type.AUTH_USER, authUserWorker);
}
