
import { all } from "redux-saga/effects";
import * as TaskSaga from "./task";
export function* rootSaga() {
    yield all([
        TaskSaga.taskSaga()
    ]);

}