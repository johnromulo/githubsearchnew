import styled from 'styled-components';
import PulseLoaderDefault from 'react-spinners/PulseLoader';

export const Container = styled.div`
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
})``;
