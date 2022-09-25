import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteDataRecived, updateDataRecived } from '../datafile/user.actions';
import {
  TableCell,
  Input,
  STableRow,
  SBtnEdit,
  SBtnDelete,
  SBtnSave,
} from './style-js/aMainScrean';

const TableRow = ({ item }) => {
  const dispatch = useDispatch();

  const [change, setChange] = useState('static');

  const redactRow = () => {
    setChange('redact');
  };

  const staticCell = change === 'static';
  const redactCell = change === 'redact';

  const [name, setName] = useState(item.name);
  const [age, setAge] = useState(item.age);
  const [about, setAbout] = useState(item.about);

  const deleteRow = (id) => {
    dispatch(deleteDataRecived(id));
  };
  const saveRow = (id) => {
    dispatch(updateDataRecived(id, name, age, about));
    setChange('static');
  };

  return (
    <STableRow>
      <TableCell> {item.id}</TableCell>
      <TableCell>
        {staticCell ? (
          item.name
        ) : (
          <Input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            minLength="5"
            required
          />
        )}
      </TableCell>
      <TableCell>
        {staticCell ? (
          item.age
        ) : (
          <Input
            value={age}
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />
        )}
      </TableCell>
      <TableCell>
        {staticCell ? (
          item.about
        ) : (
          <Input
            value={about}
            name="about"
            onChange={(e) => setAbout(e.target.value)}
          />
        )}
      </TableCell>
      <TableCell>
        {staticCell && (
          <>
            <SBtnEdit onClick={() => redactRow(item.id)}>
              <i className="fa-regular fa-pen-to-square"></i>
            </SBtnEdit>
            <SBtnDelete onClick={() => deleteRow(item.id)}>
              <i className="fa-regular fa-trash-can"></i>
            </SBtnDelete>
          </>
        )}
        {redactCell && (
          <SBtnSave onClick={() => saveRow(item.id)}>
            <i className="fa-regular fa-floppy-disk"></i>
          </SBtnSave>
        )}
      </TableCell>
    </STableRow>
  );
};

export default TableRow;
