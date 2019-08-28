import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        margin: 20px;
        width: 360px;
        padding: 12px;
        border-radius: 5px;
        border: 1px solid #dfe1e5;

        &:hover,
        &:focus {
          box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.2);
          border-color: rgba(223, 225, 229, 0);
        }
      }
    }
  }
`;
