export function searchRequest(username) {
  return {
    type: '@repository/SEARCH_REQUEST',
    payload: { username },
  };
}

export function searchResetState() {
  return {
    type: '@repository/SEARCH_INITIAL_STATE',
  };
}

export function searchSuccess(repositories, last) {
  return {
    type: '@repository/SEARCH_SUCCESS',
    payload: { repositories, last },
  };
}

export function searchFailure() {
  return {
    type: '@repository/SEARCH_FAILURE',
  };
}
