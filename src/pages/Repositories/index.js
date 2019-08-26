import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { GoStar } from 'react-icons/go';
import { Container } from './styles';

import { searchRequest } from '~/store/modules/repository/actions';

export default function Repositories({ match }) {
  const dispatch = useDispatch();

  const repositories = useSelector(state => state.repositories.data);

  useEffect(() => {
    const { filter } = match.params;
    dispatch(searchRequest(filter));
  }, [dispatch, match.params]);

  return (
    <>
      {repositories.map(repo => (
        <Container key={repo.id}>
          <h1>{repo.name}</h1>
          <h3>{repo.description}</h3>
          <span>
            <GoStar size={24} /> {repo.stargazers_count}
          </span>
        </Container>
      ))}
    </>
  );
}

Repositories.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string,
    }),
  }).isRequired,
};
