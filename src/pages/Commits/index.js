import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Loading from '~/components/Loading';

import { commitsRequest } from '~/store/modules/commits/actions';

import { Container } from './styles';

export default function Commits({ match }) {
  const dispatch = useDispatch();

  const commits = useSelector(state => state.commits.data);
  const last = useSelector(state => state.commits.last);
  const { filter, repo } = match.params;

  const handleCommits = useCallback(() => {
    dispatch(commitsRequest(filter, repo));
  }, [dispatch, filter, repo]);

  useEffect(() => {
    handleCommits();
  }, [handleCommits]);

  return (
    <InfiniteScroll
      pageStart={1}
      initialLoad={false}
      isReverse={false}
      loadMore={handleCommits}
      hasMore={!last}
      loader={<Loading key={0} loading />}
    >
      {commits.map(cmt => (
        <Container key={cmt.sha}>
          <h1>{cmt.commit.message}</h1>
          <h3>{cmt.commit.author.name}</h3>
          <span>{cmt.commit.author.date}</span>
        </Container>
      ))}
    </InfiniteScroll>
  );
}

Commits.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string,
      repo: PropTypes.string,
    }),
  }).isRequired,
};
