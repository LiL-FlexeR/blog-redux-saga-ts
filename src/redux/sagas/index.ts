import { takeLatest } from "@redux-saga/core/effects";
import { AuthActions } from "../actions";
import { authUserWorker, signInWorker } from "./auth";
import {
  createPostWorker,
  deletePostWorker,
  patchPostWorker,
  setPostWorker,
} from "./post";
import { deleteUserWorker, patchUserWorker } from "./user";

function* sagaWatcher() {
  yield takeLatest(AuthActions.Type.SIGN_IN, signInWorker);
  yield takeLatest(AuthActions.Type.AUTH_USER, authUserWorker);
  yield takeLatest(AuthActions.Type.PATCH_USER, patchUserWorker);
  yield takeLatest(AuthActions.Type.DELETE_USER, deleteUserWorker);
  yield takeLatest(AuthActions.Type.ADD_POST, createPostWorker);
  yield takeLatest(AuthActions.Type.LOAD_POST, setPostWorker);
  yield takeLatest(AuthActions.Type.REMOVE_POST, deletePostWorker);
  yield takeLatest(AuthActions.Type.UPDATE_POST, patchPostWorker);
}

export default function* rootSaga() {
  yield sagaWatcher();
}
