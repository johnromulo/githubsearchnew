import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Loading from '~/components/Loading';
import Commit from '~/components/Commit';
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
          <Commit key={cmt.sha} cmt={cmt} />
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
