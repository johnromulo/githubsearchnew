import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Search({
  handleSubmit,
  setUsername,
  username,
  styles,
}) {
  return (
    <Container styles={styles}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <button type="submit">Buscar</button>
        </div>
      </form>
    </Container>
  );
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
};
