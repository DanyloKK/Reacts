import {addItem, deleteItem, fetchItems, toggleCompleted, updateItems,fetchSwapiData} from "./slices/todoSlicer.js";
import {toggleItemSaga,deleteItemSaga,fetchItemsSaga,updateItemSaga,addItemSaga,addSwapiItem} from "./sagas.js";
import {takeEvery } from 'redux-saga/effects';

export function* watchSwapiFetchData(){
    yield takeEvery(fetchSwapiData.type, addSwapiItem);
}
export function* watchToggleSaga(){
    yield takeEvery(toggleCompleted.type,toggleItemSaga)
}
export function* watchUpdateItemSaga() {
    yield takeEvery(updateItems.type, updateItemSaga);
}
export function* watchFetchItems() {
    yield takeEvery(fetchItems.type,fetchItemsSaga);
}
export function* watchDeleteItemSaga() {
    yield takeEvery(deleteItem.type,deleteItemSaga)
}
export function* watchAddItems() {
    yield takeEvery(addItem.type,addItemSaga)
}