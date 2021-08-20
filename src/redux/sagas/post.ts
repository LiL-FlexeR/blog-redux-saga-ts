import { fetchPosts, createPost, deletePost, patchPost } from "./api/posts";
import { IAction } from "../../types/auth";
import { put, call } from "@redux-saga/core/effects";
import { AuthActions } from "../actions";

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
