import { all } from 'redux-saga/effects';
import permitSaga from './permitSaga';

export default function* rootSaga() {
  yield all([
    permitSaga(),
  ])
}