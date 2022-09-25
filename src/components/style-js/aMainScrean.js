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
  color: grey;
  opacity:  0.6;

  &:hover {
    opacity: 1;
  }
`;

export const Table = styled.table`
  background-color: green;
  padding: 5px;
  border-radius: 8px;
`;

export const TableCell = styled.td`
  padding: 5px;
  background-color: white;
  border-radius: 1px;
  min-width: 20px;
  
`;
export const Input = styled.input`
  background-color: yellow;
  border: none;
`;

 export const STableRow = styled.tr`
   background-color: yellow;
   border: none;
 `;

const IconBtn = styled.button`
  font-size: 1em;
  cursor: pointer;
  background-color: white;
  color: black;
  border: none;
`;

export const SBtnEdit = styled(IconBtn)`
  &:hover {
    color: white;
    color: orange;
  }
`;

export const SBtnDelete = styled(IconBtn)`
    &:hover {
    background-color: white;
    color: red;
  }
`;

export const SBtnSave = styled(IconBtn)`
  font-size: 1em;
  &:hover {
    background-color: white;
    color: green;
  }
`;