import { rootReducer } from "./../reducers/index";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, enhancer);
