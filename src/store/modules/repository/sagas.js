import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from '~/services/api';

import { searchSuccess, searchFailure } from './actions';

export function* searchProfile({ payload }) {
  try {
    const { username } = payload;
    const page = yield select(state => state.repositories.page);

    const response = yield call(
      api.get,
      `users/${username}/repos?page=${page}&per_page=30`
    );
    const last = !response.headers.link;
    // console.log(response.headers.link);

    yield put(searchSuccess(response.data, last));
  } catch (error) {
    yield put(searchFailure());
  }
}

export default all([takeLatest('@repository/SEARCH_REQUEST', searchProfile)]);
