import { combineReducers } from 'redux';

import repository from './repository/reducer';
import profile from './profile/reducer';

export default combineReducers({ repository, profile });
