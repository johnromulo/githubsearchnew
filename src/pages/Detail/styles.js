import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: 0.5fr 2fr;
  grid-template-areas:
    'header header'
    'aside main';

  header {
    background: #4f4f4f;
    grid-area: header;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  aside {
    grid-area: aside;
    padding-left: 28px;
  }

  main {
    grid-area: main;
    padding-right: 28px;

    /* > div {
      grid-area: main;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    } */
  }
`;
