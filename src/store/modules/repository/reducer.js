import produce from 'immer';

const INITIAL_STATE = {
  repositories: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@repository/SEARCH_REQUEST': {
        draft.repositories = [];
        break;
      }
      case '@repository/SEARCH_SUCCESS': {
        draft.repositories = [];
        break;
      }
      case '@repository/SEARCH_FAILURE': {
        draft.repositories = [];
        break;
      }
      default:
    }
  });
}
