import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Profile from '~/components/Profile';
import Logo from '~/components/Logo';
import Search from '~/components/Search';
import Notfound from '~/components/NoFound';

import { profileRequest } from '~/store/modules/profile/actions';
import { repositoriesResetState } from '~/store/modules/repository/actions';

import { Container } from './styles';

export default function Detail({ match, history, children }) {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.profile.data);
  const error = useSelector(state => state.profile.error);

  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(repositoriesResetState());
    history.push(`/${username}`);
  }

  useEffect(() => {
    const { filter } = match.params;
    setUsername(filter);
  }, [match.params]);

  useEffect(() => {
    const { filter } = match.params;
    dispatch(profileRequest(filter));
  }, [dispatch, match.params]);

  return (
    <Container>
      <header>
        <Logo />
        <Search
          handleSubmit={handleSubmit}
          username={username}
          setUsername={setUsername}
        />
      </header>
      {!error ? (
        <>
          <aside>
            <Profile profile={profile} />
          </aside>
          <main>{children}</main>
        </>
      ) : (
        <div>
          <Notfound />
        </div>
      )}
    </Container>
  );
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  children: PropTypes.element.isRequired,
};
