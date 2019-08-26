import { combineReducers } from 'redux';

import repositories from './repository/reducer';
import profile from './profile/reducer';

export default combineReducers({ repositories, profile });
