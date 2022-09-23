import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import *as usersAction from '../datafile/user.actions';
import Modal from './Modal';
import { OpenBtn, MainConteiner, Title, Table } from './style-js/aMainScrean';


const TableUsers = ({ fetchDataRecived, usersList }) => {

  const [activ, setActiv] = useState(false)
  
const openModal = () => { 
setActiv(true)
}


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
    </MainConteiner>
  );
};

const mapDispatch = {
  fetchDataRecived: usersAction.fetchDataRecived,
};

const mapState = (state) => {

  return {
    usersList: state.Users.userData,
  };
};

export default connect(mapState, mapDispatch)(TableUsers);


