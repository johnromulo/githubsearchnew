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
    const state = {
      liked: false,
      dislaked: false,
      countLike: 100,
      countDislike: 25,
    };

    const teste = {
      countLike: !liked ,
      countDislike: liked ? countDislike + 1 : countDislike - 1,
      liked: !liked,
      dislaked: false,
    };
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
