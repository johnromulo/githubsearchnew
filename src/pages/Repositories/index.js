import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import { GoStar } from 'react-icons/go';
import { Container } from './styles';

import { searchRequest } from '~/store/modules/repository/actions';

export default function Repositories({ match }) {
  const dispatch = useDispatch();

  const repositories = useSelector(state => state.repositories.data);
  const last = useSelector(state => state.repositories.last);

  function handleRepos() {
    const { filter } = match.params;
    dispatch(searchRequest(filter));
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={handleRepos}
      hasMore={!last}
      loader={<div key={0}>Loading ...</div>}
    >
      {repositories.map(repo => (
        <Container key={repo.id}>
          <h1>{repo.name}</h1>
          <h3>{repo.description}</h3>
          <span>
            <GoStar size={24} /> {repo.stargazers_count}
          </span>
        </Container>
      ))}
    </InfiniteScroll>
  );
}

Repositories.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string,
    }),
  }).isRequired,
};
