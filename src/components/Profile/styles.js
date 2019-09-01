import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  background: rgb(40, 48, 66);
  padding: 20px 0;

  img {
    /* position: absolute; */
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px solid #fff;
    background: #fff;
    margin-bottom: 12px;
    background: yellow;
  }

  h1 {
    font-weight: 300;
    font-size: 22px;
    color: #fff;
    margin-bottom: 4px;
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
