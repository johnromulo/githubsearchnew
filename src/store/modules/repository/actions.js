export function searchRequest(data) {
  return {
    type: '@repository/SEARCH_REQUEST',
    payload: { data },
  };
}

export function searchSuccess(data) {
  return {
    type: '@repository/SEARCH_SUCCESS',
    payload: { data },
  };
}

export function searchFailure() {
  return {
    type: '@repository/SEARCH_FAILURE',
  };
}
