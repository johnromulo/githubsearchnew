import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 40px;
  padding: 0 28px;
  grid-template-columns: 0.5fr 2fr;
  grid-template-areas:
    'header header'
    'aside main'
    'notfound notfound';
  margin-bottom: 40px;

  header {
    grid-area: header;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  aside {
    grid-area: aside;
    display: flex;
  }

  main {
    grid-area: main;
    display: flex;
  }

  > div {
    grid-area: notfound;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 900px) {
    flex: 1;
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'aside'
      'main'
      'notfound';

    header {
      flex-direction: column;
      padding: 28px;
    }
  }
`;
