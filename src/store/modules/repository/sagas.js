import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { searchSuccess, searchFailure } from './actions';

export function* searchProfile({ payload }) {
  try {
    const { username } = payload;

    const response = yield call(
      api.get,
      `users/${username}/repos?page=1&per_page=30`
    );
    // console.log(response.headers.link);

    yield put(searchSuccess(response.data));
  } catch (error) {
    yield put(searchFailure());
  }
}

export default all([takeLatest('@repository/SEARCH_REQUEST', searchProfile)]);
