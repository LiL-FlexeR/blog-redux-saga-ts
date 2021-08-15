import sagaWatcher from "./signIn";

export default function* rootSaga() {
  yield sagaWatcher();
}
