import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 40px;
  }

  article {
    background: rgb(40, 48, 66);
    color: #5c5c5c;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    &:hover {
      /* box-shadow: 0 6px 6px rgba(0, 0, 0, 0.36); */
      box-shadow: 0 -4px 0px 0px #ff3366;
      img {
        border: 3px solid #ff3366;
      }
    }

    img {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      top: -25px;
    }

    p {
      font-size: 14px;
      font-weight: 300;
      color: #fff;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 16px;
      font-weight: 300;
      color: #fff;
    }

    span {
      font-size: 12px;
      font-weight: 300;
      display: flex;
      align-items: center;
      color: #fff;
    }
  }
`;
