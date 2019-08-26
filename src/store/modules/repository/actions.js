export function searchRequest(username) {
  return {
    type: '@repository/SEARCH_REQUEST',
    payload: { username },
  };
}

export function searchSuccess(repositories) {
  return {
    type: '@repository/SEARCH_SUCCESS',
    payload: { repositories },
  };
}

export function searchFailure() {
  return {
    type: '@repository/SEARCH_FAILURE',
  };
}
