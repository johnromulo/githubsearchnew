import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 40px;
    flex: 1;
  }
`;
