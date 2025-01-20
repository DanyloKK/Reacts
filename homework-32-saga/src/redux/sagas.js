import {all, call, put} from 'redux-saga/effects';
import {
    addTodo,
    deleteTodo,
    fetchTodo,
    toggleCompletedTask,
    updateTodo,
    getSwapiData,
} from "./slices/todoSlicer";
import {
    watchToggleSaga,
    watchUpdateItemSaga,
    watchFetchItems,
    watchDeleteItemSaga,
    watchAddItems,
    watchSwapiFetchData
} from "./watchersTodo.js";

function fetchHelper(url, options) {
    return fetch(url, options).then((response) => {
        if (!response.ok) {
            throw new Error("Http error");
        }

        return response.json();
    });
}
export function* addSwapiItem(action) {
    try{
        const todo = yield call(fetchHelper,action.payload)
        yield put(getSwapiData(todo))
    }catch(error){
        console.log(error);
    }
}

export function* addItemSaga(action) {
    try {
        const todo = yield call(fetchHelper, "https://678a84fddd587da7ac2a7ff0.mockapi.io/todos", {
            method: "POST",
            body: JSON.stringify({
                task: action.payload,
                completed: false,
            }),
            headers: {"content-type": "application/json"},
        });
        console.log(todo);
        yield put(addTodo(todo));
    } catch (error) {
        console.error("Error has occured!", error);
    }
}

export function* deleteItemSaga(action) {
    try {
        const deleteTodos = yield call(fetchHelper, `https://678a84fddd587da7ac2a7ff0.mockapi.io/todos/${action.payload}`, {
            method: "DELETE",
        })
        console.log(deleteTodos)
        yield put(deleteTodo(deleteTodos))
    } catch (error) {
        console.error("Error has occured!", error);
    }
}

export function* fetchItemsSaga() {
    try {
        const response = yield call(fetchHelper, "https://678a84fddd587da7ac2a7ff0.mockapi.io/todos");
        yield put(fetchTodo(response))
    } catch (error) {
        console.error("Error has occured!", error);
    }
}

export function* updateItemSaga(action) {
    try {
        const response = yield call(fetchHelper, `https://678a84fddd587da7ac2a7ff0.mockapi.io/todos/${action.payload.id}`, {
            method: "PUT",
            body: JSON.stringify({
                id: action.payload.id,
                task: action.payload.task,
            }),
            headers: {"content-type": "application/json"},
        })
        console.log(response)
        yield put(updateTodo(response))
    } catch (error) {
        console.error("Error has occured!", error);
    }
}

export function* toggleItemSaga(action) {
    try {
        const response = yield call(fetchHelper, `https://678a84fddd587da7ac2a7ff0.mockapi.io/todos/${action.payload.id}`, {
            method: "PUT",
            body: JSON.stringify({
                completed: action.payload.completed,
            }),
            headers: {"content-type": "application/json"},
        })
        console.log(response)
        yield put(toggleCompletedTask(response))
    } catch (error) {
        console.error("Error has occured!", error);
    }
}

export default function* rootSaga() {
    yield all([watchAddItems(), watchDeleteItemSaga(), watchFetchItems(), watchUpdateItemSaga(), watchToggleSaga(),watchSwapiFetchData()]);
}