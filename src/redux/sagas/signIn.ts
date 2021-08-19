import { createPost, deletePost, fetchPosts, patchPost } from "./api/posts";
import { IAction } from "./../../types/auth";
import { takeLatest } from "@redux-saga/core/effects";
import { put, call } from "@redux-saga/core/effects";
import { AuthActions } from "../actions";
import { fetchAuth, fetchCurrentUser } from "./api/signIn";
import { deleteUser, updateUser } from "./api/user";

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

export function* patchUserWorker(action: IAction): any {
  const patch = yield call<any>(updateUser, action.payload);
  yield put(AuthActions.setUserAction(patch));
}

export function* deleteUserWorker(action: IAction): any {
  yield call<any>(deleteUser, action.payload);
  yield put(AuthActions.resetUserAction());
}

export function* createPostWorker(action: IAction): any {
  const newPost = yield call<any>(createPost, action.payload);
  yield put(AuthActions.createPostAction(newPost));
}

export function* setPostWorker(action: IAction): any {
  const posts = yield call<any>(fetchPosts, action.payload);
  yield put(AuthActions.setPostAction(posts));
}

export function* deletePostWorker(action: IAction): any {
  yield call<any>(deletePost, action.payload);
  yield put(AuthActions.deletePostAction(action.payload));
}
export function* patchPostWorker(action: IAction): any {
  const patchedPost = yield call<any>(patchPost, action.payload);
  console.log(patchedPost);
  yield put(AuthActions.patchPostAction(patchedPost));
}

export default function* sagaWatcher() {
  yield takeLatest(AuthActions.Type.SIGN_IN, signInWorker);
  yield takeLatest(AuthActions.Type.AUTH_USER, authUserWorker);
  yield takeLatest(AuthActions.Type.PATCH_USER, patchUserWorker);
  yield takeLatest(AuthActions.Type.DELETE_USER, deleteUserWorker);
  yield takeLatest(AuthActions.Type.ADD_POST, createPostWorker);
  yield takeLatest(AuthActions.Type.LOAD_POST, setPostWorker);
  yield takeLatest(AuthActions.Type.REMOVE_POST, deletePostWorker);
  yield takeLatest(AuthActions.Type.UPDATE_POST, patchPostWorker);
}
