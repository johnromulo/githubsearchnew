import styled from 'styled-components';
// https://github.com/Viglino/css-page-loader

export const Container = styled.div`
  color: #999;
  font-size: 15px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    background-color: #c1bebb;
    position: absolute;
    border-radius: 50%;
    left: 25px;
    bottom: 0;
    height: 30px;
    width: 30px;
    opacity: 0;
    animation: page-loaderFade 1s linear infinite;
    -webkit-animation: page-loaderFade 1s linear infinite;
  }

  @keyframes page-loaderFade {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
`;
