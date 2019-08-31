import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Image from '~/components/Image';
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
  // <img src={record.picture} onError={(e)=>{e.target.onerror = null; e.target.src="image_path_here"}}/>
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
            <Image
              src={
                cmt.author && cmt.author.avatar_url
                  ? cmt.author.avatar_url
                  : 'nouser'
              }
              alt={cmt.author && cmt.author.login ? cmt.author.login : 'nouser'}
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
