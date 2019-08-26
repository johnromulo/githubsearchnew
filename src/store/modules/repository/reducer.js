import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  page: 1,
  last: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@repository/SEARCH_SUCCESS': {
        draft.data = action.payload.repositories;
        break;
      }
      case '@repository/SEARCH_FAILURE': {
        draft.data = [];
        break;
      }
      default:
    }
  });
}
