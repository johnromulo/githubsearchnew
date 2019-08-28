import styled from 'styled-components';

export const Container = styled.div`
  color: #5c5c5c;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  border-radius: 2px;
  flex-direction: column;
  align-items: center;

  div {
    padding: 10px;
    background: red;
    width: 100%;
    height: 80px;
    margin-bottom: 80px;
    justify-content: center;
    display: flex;
    justify-content: center;

    img {
      position: absolute;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      border: 5px solid #fff;
      background: #fff;
    }
  }

  h1 {
    font-weight: 300;
    font-size: 22px;
    color: #000;
  }

  h2 {
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 16px;
  }

  li {
    font-size: 14px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 7px;
    }
  }
`;
