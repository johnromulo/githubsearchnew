import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Loading from '~/components/Loading';
import {
  commitsRequest,
  commitsResetState,
} from '~/store/modules/commits/actions';

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
    dispatch(commitsResetState());
    handleCommits();
  }, [dispatch, handleCommits]);

  return (
    <Container>
      <InfiniteScroll
        pageStart={1}
        initialLoad={false}
        isReverse={false}
        loadMore={handleCommits}
        hasMore={!last}
        loader={<Loading key={0} loading />}
      >
        {commits.map(cmt => (
          <article key={cmt.sha}>
            <img
              src={
                cmt.author && cmt.author.avatar_url ? cmt.author.avatar_url : ''
              }
              alt={
                cmt.author && cmt.author.login ? cmt.author.login : 'no user'
              }
            />
            <p>{cmt.commit.message}</p>
            <h1>{cmt.commit.author.name}</h1>
            <span>{cmt.commit.author.date}</span>
          </article>
        ))}
      </InfiniteScroll>
    </Container>
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
