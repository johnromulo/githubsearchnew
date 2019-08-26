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
    color: #5c5c5c;

    img {
      width: 280px;
      height: 280px;
      border-radius: 2px;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
    }

    h1 {
      font-weight: 300;
      font-size: 35px;
      color: #000;
      margin: 12px 0 7px 0;
    }

    h2 {
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 28px;
    }

    li {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }

  main {
    background: blue;
    grid-area: main;
  }
`;
