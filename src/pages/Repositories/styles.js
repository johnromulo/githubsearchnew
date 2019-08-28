import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  a {
    color: #5c5c5c;
  }

  h1 {
    font-size: 26px;
    font-weight: 300;
    color: #28a745;
  }

  h3 {
    font-size: 16px;
    font-weight: 300;
  }

  span {
    font-size: 16px;
    font-weight: 300;
    margin-top: 11px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 7px;
    }
  }
`;