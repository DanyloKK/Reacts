import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
    addTodo,
    addItem,
    deleteTodo,
    deleteItem,
    fetchItems,
    fetchTodo,
    updateItems,
    toggleCompleted,
    toggleCompletedTask,
    updateTodo} from "./slices/todoSlicer";

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
                completed:false,
            }),
            headers: { "content-type": "application/json" },
        });
        console.log(todo);
        yield put(addTodo(todo));
    } catch (error) {
        console.error("Error has occured!", error);
    }
}
function* deleteItemSaga(action) {
    try {
        const deleteTodos = yield call(fetchHelper,`https://678a84fddd587da7ac2a7ff0.mockapi.io/todos/${action.payload}`,{
            method: "DELETE",
        })
        console.log(deleteTodos)
        yield put(deleteTodo(deleteTodos))
    }catch (error) {
        console.error("Error has occured!", error);
    }
}
function* fetchItemsSaga() {
    try{
        const response = yield call(fetchHelper,"https://678a84fddd587da7ac2a7ff0.mockapi.io/todos");
        yield put(fetchTodo(response))
    }catch(error) {
        console.error("Error has occured!", error);
    }
}
function* updateItemSaga(action) {
    try{
        const response = yield call(fetchHelper,`https://678a84fddd587da7ac2a7ff0.mockapi.io/todos/${action.payload.id}`, {
            method: "PUT",
            body: JSON.stringify({
                id: action.payload.id,
                task: action.payload.task,
            }),
            headers: { "content-type": "application/json" },
        })
        console.log(response)
        yield put(updateTodo(response))
    }catch(error) {
        console.error("Error has occured!", error);
    }
}
function* toggleItemSaga(action) {
    try{
        const response = yield call(fetchHelper,`https://678a84fddd587da7ac2a7ff0.mockapi.io/todos/${action.payload.id}`, {
            method: "PUT",
            body: JSON.stringify({
                completed: action.payload.completed,
            }),
            headers: { "content-type": "application/json" },
        })
        console.log(response)
        yield put(toggleCompletedTask(response))
    }catch(error) {
        console.error("Error has occured!", error);
    }
}
function* watchToggleSaga(){
    yield takeEvery(toggleCompleted.type,toggleItemSaga)
}
function* watchUpdateItemSaga() {
    yield takeEvery(updateItems.type, updateItemSaga);
}
function* watchFetchItems() {
    yield takeEvery(fetchItems.type,fetchItemsSaga);
}
function* watchDeleteItemSaga() {
    yield takeEvery(deleteItem.type,deleteItemSaga)
}
function* watchAddItems() {
    yield takeEvery(addItem.type,addItemSaga)
}

export default function* rootSaga() {
    yield all([watchAddItems(), watchDeleteItemSaga(),watchFetchItems(),watchUpdateItemSaga(),watchToggleSaga()]);
}