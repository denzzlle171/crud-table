import { useState } from 'react';
import { createdUser } from '../datafile/user.actions';
import {
  SModal,
  Content,
  Wraper,
  CloseBtm,
  Title,
  Sfild,
  CreateBtn,
} from './style-js/sModal';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import  ModalContext  from '../context';

const Modal = () => {
const { setActiv } = useContext(ModalContext);



  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [about, setAbout] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createdUser(name, age, about));
    setActiv(false);
  };

  return (
    <SModal>
      <Content>
        <Wraper>
          <CloseBtm onClick={() => setActiv(false)}>+</CloseBtm>
          <Title>New user</Title>
          <form onSubmit={onSubmit}>
            <Sfild
              values={name}
              onChange={(e) => setName(e.target.value)} //
              type="text"
              name="name"
              placeholder="name"
            />
            <Sfild
              values={age}
              onChange={(e) => setAge(e.target.value)} //
              type="number"
              name="age"
              placeholder="age"
            />
            <Sfild
              values={about}
              onChange={(e) => setAbout(e.target.value)} //
              type="text"
              name="about"
              placeholder="about user"
            />

            <CreateBtn type="submit">Create</CreateBtn>
          </form>
        </Wraper>
      </Content>
    </SModal>
    // </div>
  );
};

export default Modal;
