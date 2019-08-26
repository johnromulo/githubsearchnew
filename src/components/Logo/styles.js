import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${props => props.size};
  strong {
    font-weight: normal;
    color: #24292e;

    span {
      font-weight: 200;
      font-style: italic;
      font-family: 'Raleway', sans-serif;
    }
  }
`;
