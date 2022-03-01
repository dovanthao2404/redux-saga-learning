


import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";


function* addTask(action) {
    try {
        const result = yield call(() =>
            axios({
                url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
                method: "POST",
                data: action.data
            })
        );
        yield put({
            type: "getTaskApiAct",
        });
    } catch (err) {

    }

}

function* removeTask(action) {
    try {
        const result = yield call(() =>
            axios({
                url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${action.name}`,
                method: "DELETE",
            })
        );
        yield put({
            type: "getTaskApiAct",
        });
    } catch (error) {

    }
}


function* getTaskApi(action) {
    const { data, status } = yield call(() =>
        axios({
            url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
            method: "GET"
        })
    );

    yield put({
        type: "GET_TASK",
        payload: data
    });

}



function* doneTask(action) {
    try {
        const { data, status } = yield call(() =>
            axios({
                url: `http://svcy.myclass.vn/api/ToDoList/doneTask/?taskName=${action.name}`,
                method: "PUT"
            })
        );

        yield put({
            type: "getTaskApiAct",
        });
    } catch (err) {

    }

}



function* rejectTask(action) {
    try {
        const { data, status } = yield call(() =>
            axios({
                url: `http://svcy.myclass.vn/api/ToDoList/rejectTask/?taskName=${action.name}`,
                method: "PUT"
            })
        );

        yield put({
            type: "getTaskApiAct",
        });
    } catch (err) {

    }

}

export function* taskSaga() {

    yield takeLatest("getTaskApiAct", getTaskApi);
    yield takeLatest("addTask", addTask);
    yield takeLatest("removeTask", removeTask);
    yield takeLatest("doneTask", doneTask);
    yield takeLatest("rejectTask", rejectTask);
}