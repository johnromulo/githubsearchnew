import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';

import { Container, Logo, Search } from './styles';
// import Loading from '~/components/Loading';

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
      <PulseLoader sizeUnit="px" size={20} color="red" loading />
    </Container>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
