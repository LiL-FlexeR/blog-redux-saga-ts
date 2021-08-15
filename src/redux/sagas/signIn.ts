import { takeLatest } from "@redux-saga/core/effects";
import { put, call } from "@redux-saga/core/effects";
import { AuthActions } from "../actions";
import { fetchAuth, fetchCurrentUser } from "./api/signIn";

export function* workerSaga(action: any): any {
  const token = yield call(fetchAuth, action.payload);
  const currentUser = yield call(fetchCurrentUser, token);
  yield put(AuthActions.setUserAction(currentUser));
}

export default function* sagaWatcher() {
  yield takeLatest(AuthActions.Type.SIGN_IN, workerSaga);
}
