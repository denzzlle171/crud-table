import styled, { keyframes } from 'styled-components';
export const ScreenSpiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

const rotateAnimation = keyframes`
0%{
transform: rotateZ(0deg)
}
100%{
  transform: rotateZ(360deg)
}
`;

export const SSpiner = styled.div`
  display: block;
  margin: 0, auto;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 8px solid green;
  border-bottom-color: transparent;
  animation: ${rotateAnimation} 1s linear infinite;
`;
export const SLoad = styled.span`
  display: block;
  margin: 0, auto;
  margin-top: 10px;
  color:white;
`;
