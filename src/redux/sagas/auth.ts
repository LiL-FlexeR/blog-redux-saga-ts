import { put, call, takeLatest } from "@redux-saga/core/effects";
import { Action } from "redux-actions";
import { IAuth } from "./../../types/auth";
import { AuthActions } from "./../actions/auth";
// import { setAuthInfo } from "../actions/auth";

// function* SignUpWorker(action: Action<ILogin>) {
//   const { data } = yield call(signIn, action.payload);
//   yield put(AuthActions.setAuthInfo(_.pick(data, ["accessToken"] as IAuth)));
// }

// export default function* watchAuth() {
//   yield takeLatest(AuthActions.Type.SET_AUTH, SignUpWorker);
// }
