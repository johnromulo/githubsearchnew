import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '~/components/Logo';
import Search from '~/components/Search';
import Profile from '~/components/Profile';
import { profileRequest } from '~/store/modules/profile/actions';
import { Container } from './styles';

export default function Detail({ match, history }) {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.profile.data);

  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/${username}`);
  }

  useEffect(() => {
    const { filter } = match.params;
    dispatch(profileRequest(filter));
  }, [dispatch, match.params]);
  return (
    <Container>
      <header>
        <Logo size="40px" />
        <Search
          styles={{
            width: '940px',
          }}
          handleSubmit={handleSubmit}
          username={username}
          setUsername={setUsername}
        />
      </header>
      <aside>
        <Profile profile={profile} />
      </aside>
      <main> main </main>
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
};
