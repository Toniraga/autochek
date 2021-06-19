import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers'
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from './sagas';
declare global {
  interface Window {
    devToolsExtension: any;
  }
}

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleWare))
)

sagaMiddleWare.run(rootSaga);


export default store;