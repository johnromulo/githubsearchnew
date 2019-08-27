import produce from 'immer';

const INITIAL_STATE = {
  data: {},
};

export default function profile(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@profile/PROFILE_SUCCESS': {
        draft.data = action.payload.profile;
        break;
      }
      case '@profile/PROFILE_FAILURE': {
        draft.data = null;
        break;
      }
      default:
    }
  });
}
