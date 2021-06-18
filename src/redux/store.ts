import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers'
import createSagaMiddleware from "redux-saga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleWare)
);

// sagaMiddleWare.run();


export default store;