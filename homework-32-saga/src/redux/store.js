import { configureStore} from '@reduxjs/toolkit';
import rootSaga from './sagas.js'
import todosSlice from "./slices/todoSlicer.js";
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer:{
        todos:todosSlice.reducer
    },
    middleware: () => [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)