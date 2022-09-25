import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import * as usersAction from '../datafile/user.actions';
import Modal from './Modal';
import { OpenBtn, Title, Table, MainConteiner } from './style-js/aMainScrean';
import Spiner from './Spiner';


const TableUsers = ({ fetchDataRecived, usersList }) => {

  const isFetch = useSelector((state) => state.Users.isFetching);
  
  const [activ, setActiv] = useState(false);

  const openModal = () => {
    setActiv(true);
  };

  useEffect(() => {
    fetchDataRecived();
  }, []);

  return (
    <MainConteiner>
      <Title>Users list</Title>
      <Table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {usersList.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </Table>
      <OpenBtn onClick={openModal}>+</OpenBtn>
      {activ && <Modal Activate={setActiv} />}
      {isFetch && <Spiner />}
    </MainConteiner>
  );
};;

const mapDispatch = {
  fetchDataRecived: usersAction.fetchDataRecived,
};

const mapState = (state) => {
  return {
    usersList: state.Users.userData,
  };
};

export default connect(mapState, mapDispatch)(TableUsers);
