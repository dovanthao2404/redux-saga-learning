import { applyMiddleware, combineReducers, createStore } from "redux";

import createSagaMiddleware from "redux-saga";
import { movieReducer } from "./reducer/MovieReducer";
import { rootSaga } from "./sagas/rootSagas";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    movieReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);