import { all } from 'redux-saga/effects';

import repository from './repository/sagas';
import profile from './profile/sagas';

export default function* rootSaga() {
  return yield all([repository, profile]);
}
