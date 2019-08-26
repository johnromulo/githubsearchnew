import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: grid;
  padding: 0 28px;
  grid-gap: 40px 70px;
  grid-template-columns: 0.5fr 2fr;
  grid-template-areas:
    'header header'
    'aside main';

  header {
    grid-area: header;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  aside {
    grid-area: aside;
  }

  main {
    background: blue;
    grid-area: main;
  }
`;
