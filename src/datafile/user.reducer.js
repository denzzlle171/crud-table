import { USERS_DATA_RECIVED,  } from './user.actions';

const initialState = {
  userData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_DATA_RECIVED: {
      return {
        ...state,
        userData: action.payload,
      };
    }
 

    default:
      return state;
  }
};
export default userReducer;
