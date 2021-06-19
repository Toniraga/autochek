import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from "axios";
import api from '../../api';
import {
  GET_PERMITS,
  GET_PERMITS_FAIL,
  GET_PERMITS_SUCCESS
} from '../types';

const app_token = 'VsD2HZvmP5ZgmIncnZDqItcjk';

const getPermits = async () => {
  try {
    const response = await api.get('resource/ydr8-5enu.json', {
      params: {$limit: 10, $$app_token: app_token}
    })
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message);
  }
}


function* fetchPermits() {
  try {
    const permits: AxiosResponse = yield call(getPermits);
    yield put({ type: GET_PERMITS_SUCCESS, permits })
  } catch (err) {
    yield put({ type: GET_PERMITS_FAIL, message: err.message })
  }
}


function* permitSaga() {
  yield takeEvery(GET_PERMITS, fetchPermits);
}

export default permitSaga;