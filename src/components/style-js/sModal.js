 import styled from 'styled-components';

 export const SModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const Content = styled.div`
  width: 300px;
  height: 300px;
  border: 1px black solid;
  background: green;
  padding: 5px;
  border-radius: 4px;
  border: none;
  -webkit-box-shadow: 18px 15px 33px -3px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 18px 15px 33px -3px rgba(0, 0, 0, 0.53);
  box-shadow: 18px 15px 33px -3px rgba(0, 0, 0, 0.53);
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseBtm = styled.button`
  transform: rotate(45deg) scale(2);
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  padding: 0;

  // background: transparent;
  margin-left: auto;
  margin-right: 0;
`;

export const Title = styled.div`
  color: white;
  text-align: center;
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 25px;
`;

export const Sfild = styled.input`
  height: 30px;
  width: 296px;
  border: none;
  padding: 0;
  border-radius: 4px;
  padding-left: 4px;
  margin-top: 20px;
`;

export const CreateBtn = styled.button`
  height: 30px;
  width: 300px;
  padding: 5px;
  margin-top: 42px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
