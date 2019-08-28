import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 40px;
  }

  article {
    color: #5c5c5c;
    padding: 30px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
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
      color: #28a745;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 16px;
      font-weight: 300;
    }

    span {
      font-size: 12px;
      font-weight: 300;
      display: flex;
      align-items: center;

      svg {
        margin-right: 7px;
      }
    }
  }
`;
