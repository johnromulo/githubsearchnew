import React from 'react';

import { Container, PulseLoader } from './styles';

export default function Loading() {
  return (
    <Container>
      <PulseLoader loading />
    </Container>
  );
}
