import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { profileSuccess, profileFailure } from './actions';

export function* getProfile({ payload }) {
  try {
    const { username } = payload;

    const response = yield call(api.get, `users/${username}`);

    yield put(profileSuccess(response.data));
  } catch (error) {
    yield put(profileFailure());
  }
}

export default all([takeLatest('@profile/PROFILE_REQUEST', getProfile)]);
