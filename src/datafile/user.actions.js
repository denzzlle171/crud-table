import { getUserList, deleteUser, updateUser, createUser } from './gateWay';

export const USERS_DATA_RECIVED = 'USERS_DATA_RECIVED';

export const userDataRecived = (userData) => {
  return {
    type: USERS_DATA_RECIVED,
    payload: userData,
  };
};

export const fetchDataRecived = () => {
  return function (dispatch) {
    getUserList().then((userData) => dispatch(userDataRecived(userData)));
  };
};

export const deleteDataRecived = (id) => {
  return function (dispatch) {
    deleteUser(id).then(() => dispatch(fetchDataRecived()));
  };
};

export const updateDataRecived = (usreId, name, age, about) => {
  return function (dispatch, getState) {
    const state = getState();
    const userList = state.Users.userData;
    const user = userList.find((user) => user.id === usreId);
    const updatedUser = {
      ...user,
      name,
      age,
      about,
    };
    console.log(updatedUser);
    updateUser(usreId, updatedUser).then(() => dispatch(fetchDataRecived()));
  };
};

export const createdUser = (name, age, about) => {
  const thunkActions = function (dispatch) {
    const userData = {
      name,
      age,
      about,
    };
    createUser(userData).then(() => dispatch(fetchDataRecived()));
  };

  return thunkActions;
};
