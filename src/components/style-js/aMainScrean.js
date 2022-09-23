import styled from 'styled-components';

export const Title = styled.p`
  font-size: 25px;
  color: white;
  text-transform: uppercase;
`;


export const MainConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const OpenBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 0;
  margin-top: 15px;
  font-size: 25px;
  color:grey;
`;


export const Table = styled.table`
  background-color: green;
  padding: 5px;
  border-radius: 8px;
`;
