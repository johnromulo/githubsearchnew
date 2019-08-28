import styled from 'styled-components';
import PulseLoaderDefault from 'react-spinners/PulseLoader';

export const Container = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  > div {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 20px;
  }
`;

export const PulseLoader = styled(PulseLoaderDefault).attrs({
  size: 14,
  color: '#bdbdbd',
  sizeUnit: 'px',
})`
  color: blue;
`;
