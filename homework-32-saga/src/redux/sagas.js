import { all, call, put, takeEvery } from 'redux-saga/effects';
import { addTodo } from "./slices/todoSlicer";

function fetchHelper(url, options) {
    return fetch(url, options).then((response) => {
        if (!response.ok) {
            throw new Error("Http error");
        }

        return response.json();
    });
}

function* addItemSaga(action) {
    try {
        const todo = yield call(fetchHelper, "https://678a84fddd587da7ac2a7ff0.mockapi.io/todos", {
            method: "POST",
            body: JSON.stringify({
                task: action.payload,
            }),
            headers: { "content-type": "application/json" },
        });
        console.log(todo);
        yield put(addTodo(todo));
    } catch (error) {
        console.error("Error has occured!", error);
    }
}

function* watchAddItems() {
    yield takeEvery('todos/addTodo',addItemSaga)
}

export default function* rootSaga() {
    yield all([watchAddItems()]);
}