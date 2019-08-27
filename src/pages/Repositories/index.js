import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import { GoStar } from 'react-icons/go';
import { Container } from './styles';

import { repositoriesRequest } from '~/store/modules/repository/actions';

export default function Repositories({ match }) {
  const dispatch = useDispatch();

  const repositories = useSelector(state => state.repositories.data);
  const last = useSelector(state => state.repositories.last);
  const { filter } = match.params;

  const handleRepos = useCallback(() => {
    dispatch(repositoriesRequest(filter));
  }, [dispatch, filter]);

  useEffect(() => {
    handleRepos();
  }, [handleRepos]);

  return (
    <InfiniteScroll
      pageStart={1}
      initialLoad={false}
      isReverse={false}
      loadMore={handleRepos}
      hasMore={!last}
      loader={<div key={0}>Loading ...</div>}
    >
      {repositories.map(repo => (
        <Container key={repo.id}>
          <Link to={`/${filter}/${repo.name}/commits`}>
            <h1>{repo.name}</h1>
            <h3>{repo.description}</h3>
            <span>
              <GoStar size={24} /> {repo.stargazers_count}
            </span>
          </Link>
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
