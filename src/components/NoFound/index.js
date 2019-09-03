import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <h1>No Found!</h1>
      <Link to="/">back to home</Link>
    </Container>
  );
}
