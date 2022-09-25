import { getUserList, deleteUser, updateUser, createUser } from './gateWay';

export const USERS_DATA_RECIVED = 'USERS_DATA_RECIVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';


export const userDataRecived = (userData) => {
  return {
    type: USERS_DATA_RECIVED,
    payload: userData,
  };
};

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const fetchDataRecived = () => {
  return function (dispatch) {
    dispatch(showSpinner());
    getUserList().then((userData) => dispatch(userDataRecived(userData)));
  };
};

export const deleteDataRecived = (id) => {
  return function (dispatch) {
    dispatch(showSpinner());
    deleteUser(id).then(() => dispatch(fetchDataRecived()));
  };
};

export const updateDataRecived = (usreId, name, age, about) => {
  return function (dispatch, getState) {
    dispatch(showSpinner());
    const state = getState();
    const userList = state.Users.userData;
    const user = userList.find((user) => user.id === usreId);
    const updatedUser = {
      ...user,
      name,
      age,
      about,
    };
    updateUser(usreId, updatedUser).then(() => dispatch(fetchDataRecived()));
  };
};

export const createdUser = (name, age, about) => {
  const thunkActions = function (dispatch) {
    dispatch(showSpinner());
    const userData = {
      name,
      age,
      about,
    };
    createUser(userData).then(() => dispatch(fetchDataRecived()));
  };

  return thunkActions;
};



