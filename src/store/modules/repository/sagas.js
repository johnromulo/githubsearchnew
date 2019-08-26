import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { searchSuccess, searchFailure } from './actions';

export function* searchProfile({ payload }) {
  try {
    const { user_name } = payload.data;

    const response = yield call(api.get, `users/${user_name}`);

    yield put(searchSuccess(response.data));
  } catch (error) {
    yield put(searchFailure());
  }
}

export default all([takeLatest('@repository/SEARCH_REQUEST', searchProfile)]);
