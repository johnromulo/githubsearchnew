import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    flex: 1;

    > div {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  a {
    background: rgb(40, 48, 66);
    color: #5c5c5c;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      /* box-shadow: 0 6px 6px rgba(0, 0, 0, 0.36); */
      box-shadow: 0 -4px 0px 0px #ff3366;
    }

    h1 {
      font-size: 20px;
      font-weight: 300;
      color: #fff;
    }

    h3 {
      font-size: 14px;
      font-weight: 300;
    }

    span {
      font-size: 16px;
      font-weight: 300;
      margin-top: 11px;
      display: flex;
      align-items: center;
      color: #fff;

      svg {
        color: #fff;
        margin-right: 7px;
      }
    }
  }

  @media (max-width: 900px) {
    > div {
      grid-template-columns: 1fr;

      > div {
        grid-column-start: 1;
        grid-column-end: 1;
      }
    }
  }
`;
