import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logo from '~/components/Logo';
import Search from '~/components/Search';
import { Container } from './styles';

export default function Home({ history }) {
  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/${username}`);
  }

  return (
    <Container>
      <Logo />
      <Search
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
      />
    </Container>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
