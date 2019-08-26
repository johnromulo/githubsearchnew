import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Logo({ size }) {
  return (
    <Container size={size}>
      <strong>
        Github <span>Search</span>
      </strong>
    </Container>
  );
}

Logo.propTypes = {
  size: PropTypes.string.isRequired,
};
