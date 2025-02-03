import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "./constants/constants";
import { addItem, addTodo, deleteItem, deleteTodo, fetchItems, fetchStart } from "./slices/todosSlice";

function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Http error");
    }

    return response.json();
  });
}

//Workers
function* fetchItemsSaga() {
  try {
    const todos = yield call(fetchHelper, API.URL_TODO);

    yield put(fetchItems(todos));
  } catch (e) {
    console.error(e);
  }
}

function* deleteItemSaga(action) {
  try {
    const todo = yield call(fetchHelper, `${API.URL_TODO}/${action.payload}`, {
      method: 'DELETE',
    });


    yield put(deleteItem(todo));
  } catch (e) {
    console.error(e);
  }
}

function* addItemSaga(action) {
  try {
    const todo = yield call(fetchHelper, API.URL_TODO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: action.payload }),
    });


    yield put(addItem(todo));
  } catch (e) {
    console.error(e);
  }
}

//Watchers
function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchItemsSaga);
}

function* watchDeleteTodo() {
  yield takeEvery(deleteTodo.type, deleteItemSaga);
}

function* watchAddTodo() {
  yield takeEvery(addTodo.type, addItemSaga);
}


export default function* rootSaga() {
  yield all([watchFetchTodos(), watchDeleteTodo(), watchAddTodo()]);
}
