import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from '~/services/api';

import { repositoriesSuccess, repositoriesFailure } from './actions';

export function* searchRepositories({ payload }) {
  try {
    const { username } = payload;
    const page = yield select(state => state.repositories.page);

    const response = yield call(
      api.get,
      `users/${username}/repos?page=${page}&per_page=30`
    );
    // const [, ...{ id, name, description, stargazers_count }] = response.data;

    const last = response.data.length < 30;

    yield put(repositoriesSuccess(response.data, last));
  } catch (error) {
    yield put(repositoriesFailure());
  }
}

export default all([
  takeLatest('@repository/SEARCH_REQUEST', searchRepositories),
]);
